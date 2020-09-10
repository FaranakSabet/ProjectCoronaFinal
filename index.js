const express = require("express");
var path = require("path");
const bodyParser = require("body-parser");
let data = [
  {
    "State/Territory": "California",
    "Total Cases": 668615,
    Confirmed: null,
    Probable: null,
  },
  {
    "State/Territory": "Florida",
    "Total Cases": 596511,
    Confirmed: null,
    Probable: null,
  },
  {
    "State/Territory": "Texas",
    "Total Cases": 580384,
    Confirmed: null,
    Probable: null,
  },
  {
    "State/Territory": "Georgia",
    "Total Cases": 256253,
    Confirmed: null,
    Probable: null,
  },
  {
    "State/Territory": "New York City",
    "Total Cases": 233524,
    Confirmed: 228788,
    Probable: 4736,
  },
  {
    "State/Territory": "Illinois",
    "Total Cases": 223207,
    Confirmed: 221790,
    Probable: 1417,
  },
  {
    "State/Territory": "Arizona",
    "Total Cases": 198414,
    Confirmed: 196821,
    Probable: 1593,
  },
  {
    "State/Territory": "New York",
    "Total Cases": 197811,
    Confirmed: null,
    Probable: null,
  },
  {
    "State/Territory": "New Jersey",
    "Total Cases": 189719,
    Confirmed: null,
    Probable: null,
  },
  {
    "State/Territory": "North Carolina",
    "Total Cases": 156396,
    Confirmed: null,
    Probable: null,
  },
  {
    "State/Territory": "Tennessee",
    "Total Cases": 144604,
    Confirmed: 141591,
    Probable: 3013,
  },
  {
    "State/Territory": "Louisiana",
    "Total Cases": 143566,
    Confirmed: null,
    Probable: null,
  },
  {
    "State/Territory": "Pennsylvania",
    "Total Cases": 129474,
    Confirmed: 125822,
    Probable: 3652,
  },
  {
    "State/Territory": "Massachusetts",
    "Total Cases": 125839,
    Confirmed: 116421,
    Probable: 9418,
  },
  {
    "State/Territory": "Alabama",
    "Total Cases": 116710,
    Confirmed: 110769,
    Probable: 5941,
  },
  {
    "State/Territory": "Ohio",
    "Total Cases": 115651,
    Confirmed: 109566,
    Probable: 6085,
  },
  {
    "State/Territory": "Virginia",
    "Total Cases": 114636,
    Confirmed: 109680,
    Probable: 4956,
  },
  {
    "State/Territory": "South Carolina",
    "Total Cases": 112551,
    Confirmed: 111202,
    Probable: 1349,
  },
  {
    "State/Territory": "Michigan",
    "Total Cases": 107686,
    Confirmed: 97660,
    Probable: 10026,
  },
  {
    "State/Territory": "Maryland",
    "Total Cases": 105046,
    Confirmed: null,
    Probable: null,
  },
  {
    "State/Territory": "Indiana",
    "Total Cases": 87592,
    Confirmed: null,
    Probable: null,
  },
  {
    "State/Territory": "Mississippi",
    "Total Cases": 78405,
    Confirmed: 75571,
    Probable: 2834,
  },
  {
    "State/Territory": "Missouri",
    "Total Cases": 75944,
    Confirmed: null,
    Probable: null,
  },
  {
    "State/Territory": "Wisconsin",
    "Total Cases": 75619,
    Confirmed: 70854,
    Probable: 4765,
  },
  {
    "State/Territory": "Washington",
    "Total Cases": 71371,
    Confirmed: null,
    Probable: null,
  },
  {
    "State/Territory": "Minnesota",
    "Total Cases": 70707,
    Confirmed: null,
    Probable: null,
  },
  {
    "State/Territory": "Nevada",
    "Total Cases": 66275,
    Confirmed: null,
    Probable: null,
  },
  {
    "State/Territory": "Oklahoma",
    "Total Cases": 58088,
    Confirmed: 53515,
    Probable: 4573,
  },
  {
    "State/Territory": "Arkansas",
    "Total Cases": 56894,
    Confirmed: null,
    Probable: null,
  },
  {
    "State/Territory": "Iowa",
    "Total Cases": 56631,
    Confirmed: null,
    Probable: null,
  },
  {
    "State/Territory": "Colorado",
    "Total Cases": 55341,
    Confirmed: 51676,
    Probable: 3665,
  },
  {
    "State/Territory": "Connecticut",
    "Total Cases": 52011,
    Confirmed: 49940,
    Probable: 2071,
  },
  {
    "State/Territory": "Utah",
    "Total Cases": 50053,
    Confirmed: 49636,
    Probable: 417,
  },
  {
    "State/Territory": "Kentucky",
    "Total Cases": 43899,
    Confirmed: 40493,
    Probable: 3406,
  },
  {
    "State/Territory": "Kansas",
    "Total Cases": 38401,
    Confirmed: 37401,
    Probable: 1000,
  },
  {
    "State/Territory": "Nebraska",
    "Total Cases": 32047,
    Confirmed: null,
    Probable: null,
  },
  {
    "State/Territory": "Puerto Rico",
    "Total Cases": 30720,
    Confirmed: 13992,
    Probable: 16728,
  },
  {
    "State/Territory": "Idaho",
    "Total Cases": 30070,
    Confirmed: 27989,
    Probable: 2081,
  },
  {
    "State/Territory": "Oregon",
    "Total Cases": 25155,
    Confirmed: 25155,
    Probable: 0,
  },
  {
    "State/Territory": "New Mexico",
    "Total Cases": 24469,
    Confirmed: null,
    Probable: null,
  },
  {
    "State/Territory": "Rhode Island",
    "Total Cases": 21302,
    Confirmed: null,
    Probable: null,
  },
  {
    "State/Territory": "Delaware",
    "Total Cases": 16962,
    Confirmed: 15960,
    Probable: 1002,
  },
  {
    "State/Territory": "District of Columbia",
    "Total Cases": 13639,
    Confirmed: null,
    Probable: null,
  },
  {
    "State/Territory": "South Dakota",
    "Total Cases": 11425,
    Confirmed: null,
    Probable: null,
  },
  {
    "State/Territory": "North Dakota",
    "Total Cases": 10229,
    Confirmed: null,
    Probable: null,
  },
  {
    "State/Territory": "West Virginia",
    "Total Cases": 9312,
    Confirmed: 9137,
    Probable: 175,
  },
  {
    "State/Territory": "New Hampshire",
    "Total Cases": 7134,
    Confirmed: null,
    Probable: null,
  },
  {
    "State/Territory": "Montana",
    "Total Cases": 6623,
    Confirmed: 6623,
    Probable: 0,
  },
  {
    "State/Territory": "Hawaii",
    "Total Cases": 6268,
    Confirmed: null,
    Probable: null,
  },
  {
    "State/Territory": "Alaska",
    "Total Cases": 4810,
    Confirmed: null,
    Probable: null,
  },
  {
    "State/Territory": "Maine",
    "Total Cases": 4369,
    Confirmed: 3920,
    Probable: 449,
  },
  {
    "State/Territory": "Wyoming",
    "Total Cases": 3603,
    Confirmed: 3068,
    Probable: 535,
  },
  {
    "State/Territory": "Vermont",
    "Total Cases": 1566,
    Confirmed: null,
    Probable: null,
  },
  {
    "State/Territory": "Virgin Islands",
    "Total Cases": 998,
    Confirmed: null,
    Probable: null,
  },
  {
    "State/Territory": "Guam",
    "Total Cases": 984,
    Confirmed: null,
    Probable: null,
  },
  {
    "State/Territory": "Northern Mariana Islands",
    "Total Cases": 54,
    Confirmed: 54,
    Probable: 0,
  },
  {
    "State/Territory": "American Samoa",
    "Total Cases": 0,
    Confirmed: null,
    Probable: null,
  },
  {
    "State/Territory": "Federated States of Micronesia",
    "Total Cases": 0,
    Confirmed: 0,
    Probable: 0,
  },
  {
    "State/Territory": "Palau",
    "Total Cases": 0,
    Confirmed: null,
    Probable: null,
  },
  {
    "State/Territory": "Republic of Marshall Islands",
    "Total Cases": 0,
    Confirmed: 0,
    Probable: 0,
  },
];

const app = express();
const port = 3000;
app.use("/static", express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.post("/api/state", (req, res) => {
  let state = req.body.state;
  let total = -1,
    confirmed,
    probable;
  for (d of data) {
    if (
      d["State/Territory"].toLowerCase().includes(state.toLowerCase()) ||
      state.toLowerCase().includes(d["State/Territory"].toLowerCase())
    ) {
      total = d["Total Cases"];
      confirmed = d["Confirmed"];
      probable = d["Probable"];
      break;
    }
  }
  if (total == -1) res.status(200).send("State was not found");
  else
    res.status(200).send(`State = ${d["State/Territory"]}<br>Total Cases = ${total}<br>Confirmed Cases = ${confirmed}<br>Probable Cases = ${probable}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
