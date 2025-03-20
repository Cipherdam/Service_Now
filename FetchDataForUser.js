/**\
 * FetchDataForUser
 * This was written before I had a chance to touch on performance analytics.
 * The goal was to separate date but allow the tennets of the system to be able to see the state 
 *  of a change request without giving them full access to the record and manually updating a page.  
 */


var FetchDataForUser = Class.create();
FetchDataForUser.prototype = Object.extendsObject(AbstractAjaxProcessor, {
    
    getRecords: function() {
        var result = [];
        var gr = new GlideRecord('change_request'); // Correct table name
        gr.addQuery('active', true); // Example query to filter active records
        gr.setLimit(10);
        gr.query();

        gs.info("FetchDataForUser: Query executed");

        while (gr.next()) {
            result.push({
                number: gr.getValue('number'),
                category: gr.getValue('category')
            });
        }

        gs.info('FetchDataForUser Result: ' + JSON.stringify(result)); // Logs result in ServiceNow logs
        
        if (result.length > 0) {
            return new JSON().encode(result); // Converts result array to JSON string
        } else {
            return "No records found";
        }
    },

    type: 'FetchDataForUser'
});