


//This was related to an relationship where one record in one system used a reference and the other was a string
//This is the best I could come up with on short notice
var childTickets = new GlideRecord('incident');
childTickets.addEncodedQuery('active=true');
childTickets.query();
while (childTickets.Next()) {
    var parentTicket = new GlideRecord('incident');
    parentTicket.addQuery('custom_field', childTickets.number );
    parentTicket.query();
    while(parentTicket.Next()){
        childTickets.setWorkflow(false);
        childTickets.sysAutoFields(false);
        childTickets.RelatedColumnName = parentTicket.number;
        childTickets.update();

    }
    gs.print('Child:' + childTickets + " - Parent:" + parentTicket)
}

//TODO: I need to some validation and a better way to return the 