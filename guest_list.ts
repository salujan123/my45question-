

let guest_list :string[] = ['nawaz shareesf', 'asif zardari', 'imran khan'];

for(let i=0; i<guest_list.length; i++){

    console.log('Dear Mr. ' + guest_list[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank you!\n\n')
}

let absent_guest: string = 'imran khan' ;

let new_guest :string = 'salman hadio' ;

guest_list[0] = new_guest ;

for(let i=0; i<guest_list.length; i++){

    console.log('Dear Mr. ' + guest_list[i] + ',\n\nit is our pleasure to invite you in our party.\n\nthank you!\n\n')

    console.log(`${absent_guest} is not coming to the party.`)
}
    
