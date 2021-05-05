console.log(checkSpeed(76));

function checkSpeed(speed){
    const speedLimit=70;
    const kmPerPoint=5;

    if(speed<=speedLimit+kmPerPoint)return 'Ok';

    let additionalSpeed=speed-70;
    let points=Math.floor(additionalSpeed/kmPerPoint);

    if(points>=12)return 'License Suspended';

    return points;
}