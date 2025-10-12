
//tuple
    // const user:(number|string)[]=["hc",1]
    let tuser:[string,number,boolean]
    tuser=["hc",12,true]
    let rgb:[number,number,number]=[255,123,123]
    type User=[number,string]
    const newUser:User=[112,"example@google.com"]
    newUser[1]="an.com"
    newUser.push(true)//allowed

//enums

    const enum SeatChoice{
    AISLE="aisle",
    MIDDLE="middle",
    WINDOW="window",
    FOURTH=0
    }

    const anSeat=SeatChoice.AISLE
