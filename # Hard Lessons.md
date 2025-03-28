# Hard Lessons

## Script Includes
 - Don't create a Script Include in global with read only. It wont allow you to modify it and its a pain in the ass to delete


## Before Queries
- Understanding before queries for some reason took me a bit longer to fully understand how they work than I feel like it should have.

- I am uploading the BR i changed to get the desired effect on incident tables
**Incident BR updating OOTB with Location.xml**

It has a slite modification to the last line. After breaking this down and putting it back together, my head can finally rest. 

Outside of the the box BR has some other useful queries, but this was the effect I was looking for.

```js
(function executeRule(current, previous /*null when async*/) {


    var userLocation = gs.getUser().getRecord().location;

    if (userLocation) {
        current.addQuery('caller_id.location', userLocation);
    }

})(current, previous);
```

After I understood what was going on i went and looked for a BR that was currently in place and updated it
However implemtnign this code may have some undesiered results I havnt tested yet.

 - No Clue what it would look like for a user without a location.
 - ACLs are not in place, so I assume if the user HAS access in some way shape or form, they can just get a link or drop it into the search
    - Didnt Test it
 - [] Check if ACLs need to be addressed
 - [] Validate what it would look like for locations that dont have locations with users that dont have locations.
 _While it may not impact my actual go with this, its still worth it to consider posibilities just in case_