


const choiJiMan =     {
    "index": 3,
    "player_id": 596847,
    "player_name": "Choi, Ji-Man",
    "hr": 11,
    "group": "D"
  }

const judgeAaron =  {
    "index": 71,
    "player_id": 592450,
    "player_name": "Judge, Aaron",
    "hr": 62,
    "group": "A"
  }


const vladdyJr = {
    "index": 76,
    "player_id": 665489,
    "player_name": "Guerrero Jr., Vladimir",
    "hr": 32,
    "group": "B"
  }

  export async function fetchPlayers({player_name, group}) {
        const { data } = require ('../api/db/players.json');

        return data || [];
    
  }