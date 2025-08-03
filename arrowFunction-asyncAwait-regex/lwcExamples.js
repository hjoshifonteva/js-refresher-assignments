// LWC ARROW FUNCTIONS - Examples and Exercises
// Examples showing arrow functions as callbacks and parameters in Lightning Web Components

import { LightningElement, track, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';
import updateAccount from '@salesforce/apex/AccountController.updateAccount';

// EXAMPLE 1: Arrow Functions as Event Handlers
export default class ArrowFunctionExamples extends LightningElement {
    @track accounts = [];
    @track filteredAccounts = [];
    @track selectedAccountId = null;
    @track isLoading = false;

    // Example: Arrow function as event handler
    handleSearch = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        
        // Arrow function as callback in array method
        this.filteredAccounts = this.accounts.filter(account => 
            account.Name.toLowerCase().includes(searchTerm)
        );
    }

    // Example: Arrow function maintaining 'this' context in setTimeout
    handleDelayedAction = () => {
        this.isLoading = true;
        
        // Arrow function preserves 'this' context
        setTimeout(() => {
            this.isLoading = false;
            this.showToast('Success', 'Action completed!', 'success');
        }, 2000);
    }

    // Example: Arrow function as parameter to higher-order function
    processAccountsWithCallback(accounts, callback) {
        return accounts.map(callback);
    }

    // TODO: Convert this regular function to arrow function
    handleAccountSelect(event) {
        this.selectedAccountId = event.target.dataset.accountId;
        this.dispatchEvent(new CustomEvent('accountselected', {
            detail: { accountId: this.selectedAccountId }
        }));
    }
    // handleAccountSelect = // YOUR CODE HERE

    // Example: Arrow functions in Promise chains
    loadAccountData = async () => {
        try {
            this.isLoading = true;
            
            // Arrow function as .then callback
            const accounts = await getAccountList()
                .then(data => data.map(acc => ({ ...acc, isExpanded: false })))
                .catch(error => {
                    console.error('Error loading accounts:', error);
                    return [];
                });
            
            this.accounts = accounts;
            this.filteredAccounts = accounts;
        } finally {
            this.isLoading = false;
        }
    }

    // TODO: Convert this method to use arrow function syntax
    handleRefresh() {
        this.loadAccountData();
        this.showToast('Info', 'Data refreshed', 'info');
    }
    // handleRefresh = // YOUR CODE HERE

    // Example: Arrow function as parameter for array operations
    getAccountStatistics() {
        const stats = {
            // Arrow function to count active accounts
            activeCount: this.accounts.filter(acc => acc.IsActive__c).length,
            
            // Arrow function to calculate total revenue
            totalRevenue: this.accounts
                .filter(acc => acc.AnnualRevenue)
                .reduce((sum, acc) => sum + acc.AnnualRevenue, 0),
            
            // Arrow function to get unique industries
            industries: [...new Set(this.accounts.map(acc => acc.Industry))]
                .filter(industry => industry) // Remove null/undefined
        };
        
        return stats;
    }

    // TODO: Create method using arrow function that sorts accounts
    // sortAccountsByName = // YOUR CODE HERE
    // Should sort accounts by Name property alphabetically

    // TODO: Create method using arrow function that groups accounts by industry
    // groupAccountsByIndustry = // YOUR CODE HERE
    // Should return object with industry as key, accounts array as value

    // Example: Arrow functions with async operations
    batchUpdateAccounts = async (updates) => {
        const results = await Promise.allSettled(
            updates.map(update => updateAccount({ accountId: update.Id, data: update }))
        );
        
        // Arrow function to process results
        const summary = results.reduce((acc, result, index) => {
            if (result.status === 'fulfilled') {
                acc.successful.push(updates[index]);
            } else {
                acc.failed.push({ account: updates[index], error: result.reason });
            }
            return acc;
        }, { successful: [], failed: [] });
        
        return summary;
    }

    // TODO: Create method that validates account data before update
    // validateAccountData = // YOUR CODE HERE
    // Should take account object and return { isValid: boolean, errors: string[] }
    // Use arrow functions for validation checks

    // Example: Arrow functions as event listeners
    connectedCallback() {
        // Arrow function maintains 'this' context
        this.addEventListener('scroll', this.handleScroll);
        this.loadAccountData();
    }

    handleScroll = (event) => {
        // Arrow function for scroll handling
        const scrollTop = event.target.scrollTop;
        const scrollHeight = event.target.scrollHeight;
        const clientHeight = event.target.clientHeight;
        
        // Load more data when near bottom
        if (scrollTop + clientHeight >= scrollHeight - 50) {
            this.loadMoreAccounts();
        }
    }

    // TODO: Create loadMoreAccounts method using arrow function
    // loadMoreAccounts = // YOUR CODE HERE
    // Should load next batch of accounts

    // Example: Arrow functions for data transformation
    transformAccountsForDisplay = () => {
        return this.filteredAccounts.map(account => ({
            ...account,
            displayName: `${account.Name} (${account.Type || 'Unknown'})`,
            formattedRevenue: account.AnnualRevenue 
                ? `$${account.AnnualRevenue.toLocaleString()}` 
                : 'N/A',
            statusClass: account.IsActive__c ? 'active-account' : 'inactive-account'
        }));
    }

    // TODO: Create method to handle bulk operations
    // handleBulkOperation = // YOUR CODE HERE
    // Parameters: (operation, selectedIds)
    // Should handle 'delete', 'activate', 'deactivate' operations
    // Use arrow functions for processing

    // Example: Arrow functions with custom events
    notifyParent = (eventName, detail) => {
        this.dispatchEvent(new CustomEvent(eventName, {
            detail,
            bubbles: true,
            composed: true
        }));
    }

    // Arrow function for toast notifications
    showToast = (title, message, variant) => {
        this.dispatchEvent(new ShowToastEvent({
            title,
            message,
            variant
        }));
    }

    // TODO: Create error handler using arrow function
    // handleError = // YOUR CODE HERE
    // Should log error and show user-friendly message
    // Parameter: error object

    // Example: Arrow functions in template event handling
    get accountActions() {
        return [
            {
                label: 'Edit',
                name: 'edit',
                // Arrow function as action handler
                handler: (accountId) => this.handleEdit(accountId)
            },
            {
                label: 'Delete',
                name: 'delete',
                // Arrow function with confirmation
                handler: (accountId) => this.confirmDelete(accountId)
            }
        ];
    }

    // TODO: Implement the action handlers using arrow functions
    // handleEdit = // YOUR CODE HERE
    // confirmDelete = // YOUR CODE HERE

    // Example: Arrow functions for data filtering and sorting
    applyFiltersAndSort = (filters, sortBy, sortDirection) => {
        let result = [...this.accounts];
        
        // Apply filters using arrow functions
        Object.entries(filters).forEach(([key, value]) => {
            if (value) {
                result = result.filter(account => {
                    if (key === 'industry') return account.Industry === value;
                    if (key === 'active') return account.IsActive__c === value;
                    if (key === 'minRevenue') return account.AnnualRevenue >= value;
                    return true;
                });
            }
        });
        
        // Sort using arrow function
        if (sortBy) {
            result.sort((a, b) => {
                const aVal = a[sortBy] || '';
                const bVal = b[sortBy] || '';
                const comparison = aVal > bVal ? 1 : aVal < bVal ? -1 : 0;
                return sortDirection === 'desc' ? -comparison : comparison;
            });
        }
        
        this.filteredAccounts = result;
    }

    // TODO: Create search handler with debouncing
    // createDebouncedSearch = // YOUR CODE HERE
    // Should return a function that debounces search calls
    // Use arrow functions and setTimeout

    // Example: Arrow functions with wire adapters
    @wire(getAccountList)
    wiredAccounts({ error, data }) {
        if (data) {
            // Arrow function for data processing
            this.accounts = data.map(account => ({
                ...account,
                lastModifiedFormatted: new Date(account.LastModifiedDate).toLocaleDateString()
            }));
            
            this.filteredAccounts = this.accounts;
        } else if (error) {
            this.handleError(error);
        }
    }

    // TODO: Create computed property using arrow function
    // get accountSummary() {
    //     // YOUR CODE HERE - use arrow functions to calculate summary stats
    // }

    disconnectedCallback() {
        // Clean up event listeners
        this.removeEventListener('scroll', this.handleScroll);
    }
}

// ADDITIONAL COMPONENT EXAMPLE
export class AccountListComponent extends LightningElement {
    @track accounts = [];
    
    // TODO: Create these methods using arrow functions:
    
    // 1. handleRowAction = // YOUR CODE HERE
    // Should handle datatable row actions (edit, delete, view)
    
    // 2. handleSort = // YOUR CODE HERE  
    // Should handle column sorting in datatable
    
    // 3. handleRowSelection = // YOUR CODE HERE
    // Should handle row selection in datatable
    
    // 4. exportToCSV = // YOUR CODE HERE
    // Should export selected accounts to CSV format
    
    // 5. handleMassUpdate = // YOUR CODE HERE
    // Should update multiple accounts at once
    
    // Example: Using arrow functions with Promise.all for batch operations
    performBatchOperation = async (operation, accountIds) => {
        const operations = accountIds.map(id => 
            // Arrow function returns appropriate operation
            operation === 'activate' 
                ? updateAccount({ accountId: id, data: { IsActive__c: true }})
                : operation === 'deactivate'
                ? updateAccount({ accountId: id, data: { IsActive__c: false }})
                : Promise.resolve()
        );
        
        try {
            const results = await Promise.allSettled(operations);
            
            // Arrow function to count successes
            const successCount = results.filter(result => result.status === 'fulfilled').length;
            
            this.showToast('Success', `${successCount} accounts updated`, 'success');
            return results;
        } catch (error) {
            this.handleError(error);
        }
    }
}

/* 
LWIC TEMPLATE USAGE EXAMPLES:

<!-- Using arrow function event handlers in template -->
<template>
    <lightning-input 
        label="Search Accounts" 
        onchange={handleSearch}
        placeholder="Enter account name...">
    </lightning-input>
    
    <lightning-button 
        label="Delayed Action" 
        onclick={handleDelayedAction}
        variant="brand">
    </lightning-button>
    
    <lightning-datatable
        key-field="Id"
        data={transformAccountsForDisplay}
        columns={columns}
        onrowaction={handleRowAction}
        onsort={handleSort}
        onrowselection={handleRowSelection}>
    </lightning-datatable>
</template>

TRAINER NOTES:
- Arrow functions maintain 'this' context - crucial in LWC
- Use arrow functions for event handlers to avoid binding issues
- Arrow functions work well with array methods for data processing
- Be careful with arrow functions in lifecycle hooks
- Show difference between arrow functions and regular functions in class methods
*/