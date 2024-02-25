// imports 
const getExif = require('exif-async');
const parseDMS = require('parse-dms');

// entry point fucntion

async function extractExif(){
    let gpsObject = await readExifData('china1.jpeg');
    console.log(gpsObject);
    let gpsDecimal = getGPSCoordinates(gpsObject);
    console.log(gpsDecimal);
    console.log(gpsDecimal.lat);
    console.log(gpsDecimal.lon);



}


// call the entry point (not needed in gcf)
extractExif();




// helper function 
async function readExifData(localfile){
    let exifData ;
    try {
        exifData = await getExif(localfile);
        //console.log(exifData);
        //console.log(exifData.gps);
        //console.log(exifData.gps.GPSLatitude);
        return exifData.gps;
    }catch(err) {
    console.log(err);
    return null ;
    }

    
}

function getGPSCoordinates(g) {
 const latString = `${g.GPSLatitude[0]}:${g.GPSLatitude[1]}:${g.GPSLatitude[2]}${g.GPSLatitudeRef}`;  
 const lonString = `${g.GPSLongitude[0]}:${g.GPSLongitude[1]}:${g.GPSLongitude[2]}${g.GPSLongitudeRef}`;       

const degCoords = parseDMS(`${latString}${lonString}`);
return degCoords ;



}
