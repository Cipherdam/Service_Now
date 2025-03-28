
// Started with this as a business rule before query

(function executeRule(current, previous /*null when async*/) {

	// if(!gs.hasRole('admin')){
	// 	gs.addInfoMessage('User is not an admin and loc is -'+gs.getUser().getLocation);
	// 	current.addQuery('location', gs.getUser().getLocation);
	// }else{
	// 	gs.addInfoMessage('User is an ADMIN' + gs.getUser().getLocation );
	// }
    var userLocation = gs.getUser().getRecord().location;

    if (userLocation) {
        // Filter incidents where caller's location matches the user's location
        current.addQuery('caller_id.location', userLocation);
    }

})(current, previous);


/* It took me a lot longer to understand this than it should have. 
// I ran into a weird issue where we needed to hide incidents from people from another organization
 Not for security reasons but mainly the helpdesk doesnt understand how filters, there probably needs to be
 some ACLs to follow up to ensure someone cant get to specific records but this is a start to something thats
 going to help out in the long run

 So i ended up finding the ootb rule based on looking for a script with "opened by"
 And changed this:
 current.addQuery("caller_id", u).addOrCondition("opened_by", u).addOrCondition("watch_list", "CONTAINS", u);

To this:
 current.addQuery("caller_id", u).addOrCondition("opened_by", u).addOrCondition("watch_list", "CONTAINS", u).addOrCondition('caller_id.location', u);


 Opened_by.location might be a useful add


 */

