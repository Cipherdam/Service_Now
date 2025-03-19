/**
 * 
 * @param input
 * Input is generally going to pulled from a catalog or a form variable.
 *  - I used this to determine if the field was cleared after an onSubmit
 * if the field is not required. It seems like "" is technically a validate
 * date. I was using more on the catalog item but this seem to resolve the
 * current issue I was facing. 
 * @returns 
 *  I have this returning the date input for debugging then I liked how it displayed
 *  in the logs. If its not needed for others, I will just comment it out and return true
 * 
 *  It will either return "false" or the input date using the format of the systems Date.
 * 
 * TODO: Provide Examples
 */

//TODO: See how I can utilize this in a script include for internal validations
//TODO: Thought on putting a optional bool for return type
function checkDate(input) {
    var dateCheck = new Date(input);
    if (dateCheck === 'Invalid Date') {
        return false;
    } 
    //TODO: Test if I even need this else statement. I could just return dateCheck
    else {
        
        return dateCheck;
        //return true
    }
}