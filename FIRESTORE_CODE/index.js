const {Firestore} = require('@google-cloud/firestore');

// entry point fucntion 

async function writeToFS() {
    const firestore = new Firestore ({
        projectId:"sp24-41200-behal-globaljags",
        // databaseId:"whatever"

    });

    // create dummy project for demo purposes
    let dataObject = {};

    // add some key values pairs 
    dataObject.imagename = "sp24-41200-gj-finals/1708725246241907.jpg";
    dataObject.imageURL = "https://storage.cloud.google.com/sp24-41200-gj-finals/1708725246241907.jpg";
    dataObject.latitude = 39.90568611111111 ;
    dataObject.longitutde = 116.39314166666668 ;
    dataObject.ThumbURL = "https://storage.cloud.google.com/sp24-41200-gj-thumbnails/thumb%4064_1708725246241907.jpg"
 


    console.log(`The dataobject:  `);
    console.log(dataObject);


// write object into Firestore
let collectionRef = firestore.collection('photos');
let documentRef = await collectionRef.add(dataObject);
console.log(`Document created:${documentRef.id}`);
}

// call of entry point function (not needed in GCF)
writeToFS();