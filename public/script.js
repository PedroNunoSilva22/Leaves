////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                      GRID VARIABLES
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let dados = [];

let canvas, systems;

let leafs = [];
let dailyLeafs = [];

let stDate = 279; //236;
let inc = 1;

const space = 30;
const module = space * 20;
const gap = space * 2.5;
let font, fontsize = 10;

let type = true;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                      DATA VARIABLES
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const CPVs = [
    "03", // Agricultural, farming, fishing, forestry and related products"
    "09", // Petroleum products, fuel, electricity and other sources of energy
    "14", // Mining, basic metals and related products
    "15", // Food, beverages, tobacco and related products
    "16", // Agricultural machinery
    "18", // Clothing, footwear, luggage articles and accessories
    "19", // Leather and textile fabrics, plastic and rubber materials
    "22", // Printed matter and related products
    "24", // Chemical products
    "30", // Office and computing machinery, equipment and supplies except furniture and software packages
    "31", // Electrical machinery, apparatus, equipment and consumables; Lighting
    "32", // Radio, television, communication, telecommunication and related equipment
    "33", // Medical equipments, pharmaceuticals and personal care products
    "34", // Transport equipment and auxiliary products to transportation
    "35", // Security, fire-fighting, police and defence equipment
    "37", // Musical instruments, sport goods, games, toys, handicraft, art materials and accessories
    "38", // Laboratory, optical and precision equipments (excl. glasses)
    "39", // Furniture (incl. office furniture), furnishings, domestic appliances (excl. lighting) and cleaning products
    "41", // Collected and purified water
    "42", // Industrial machinery
    "43", // Machinery for mining, quarrying, construction equipment
    "44", // Construction structures and materials; auxiliary products to construction (excepts electric apparatus)
    "45", // Construction work
    "48", // Software package and information systems
    "50", // Repair and maintenance services
    "51", // Installation services (except software)
    "55", // Hotel, restaurant and retail trade services
    "60", // Transport services (excl. Waste transport)
    "63", // Supporting and auxiliary transport services; travel agencies services
    "64", // Postal and telecommunications services
    "65", // Public utilities
    "66", // Financial and insurance services
    "70", // Real estate services
    "71", // Architectural, construction, engineering and inspection services
    "72", // IT services: consulting, software development, Internet and support
    "73", // Research and development services and related consultancy services
    "75", // Administration, defence and social security services
    "76", // Services related to the oil and gas industry
    "77", // Agricultural, forestry, horticultural, aquacultural and apicultural services
    "79", // Business services: law, marketing, consulting, recruitment, printing and security
    "80", // Education and training services
    "85", // Health and social work services
    "90", // Sewage-, refuse-, cleaning-, and environmental services
    "92", // Recreational, cultural and sporting services
    "98" // Other community, social and personal service
]

const CPVsCategories = {
    Saúde: ["38", "85", "33"],
    Alimentação: ["03", "15", "16", "41", "77"],
    Comércio: ["18", "55", "66", "70"],
    Comunicação: ["22", "32", "64"],
    Indústria: ["19", "09", "14", "24", "39", "42", "43", "76"],
    Transportes: ["34", "60", "63"],
    Cultura: ["37", "92"],
    Construção: ["44", "45", "50", "51", "71"],
    Tecnologia: ["30", "31", "48"],
    Educação: ["80"],
    Consultadoria: ["72", "73", "79"],
    Sociedade: ["35", "65", "75", "90", "98"]
};
const CPVsPositions = {
    Saúde: [1, 0],
    Alimentação: [3, 0],
    Comércio: [0, 1],
    Comunicação: [2, 1],
    Indústria: [4, 1],
    Transportes: [1, 2],
    Cultura: [3, 2],
    Construção: [0, 3],
    Tecnologia: [2, 3],
    Educação: [4, 3],
    Consultadoria: [1, 4],
    Sociedade: [3, 4]
};
const CPVsCategoriesNames = Object.keys(CPVsCategories);


const districtName = "Coimbra";

let municipalityMode = false;

const municipalities = {
    "Mira": [0, module],
    "Figueira da Foz": [0, 3 * module],

    "Cantanhede": [module, 0],
    "Montemor-o-Velho": [module, 2 * module],
    "Soure": [module, 4 * module],

    "Coimbra": [2 * module, module],
    "Condeixa-a-Nova": [2 * module, 3 * module],

    "Penacova": [3 * module, 0],
    "Miranda do Corvo": [3 * module, 2 * module],
    "Penela": [3 * module, 4 * module],

    "Vila Nova de Poiares": [4 * module, module],
    "Lousã": [4 * module, 3 * module],

    "Tábua": [5 * module, 0],
    "Arganil": [5 * module, 2 * module],
    "Góis": [5 * module, 4 * module],

    "Oliveira do Hospital": [6 * module, module],
    "Pampilhosa da Serra": [6 * module, 3 * module]
};

const municipalitiesNames = Object.keys(municipalities);

const processes = [
    "Concurso público",
    "Ajuste Direto Regime Geral",
    "Consulta Prévia",
    "Concurso limitado por prévia qualificação",
    "Ao abrigo de acordo-quadro"
];

let dataset = {};
let datasets = []; // Array de "dataset" acumulativos
let dailyDataset = {};
let dailyDatasets = []; // Array de "daylyDataset"
let leaves = {};
let dailyLeaves = {};

//--------------------------------------------------------------------------------
//              DISTRICT COIMBRA (MAIN 1 LEVEL)
//--------------------------------------------------------------------------------
dataset[districtName] = {};
dataset[districtName].municipalities = {};
dailyDataset[districtName] = {};
dailyDataset[districtName].municipalities = {};
leaves[districtName] = {};
leaves[districtName].municipalities = {};
dailyLeaves[districtName] = {};
dailyLeaves[districtName].municipalities = {};

for (cpvCategory of CPVsCategoriesNames) {
    dataset[districtName][cpvCategory] = {};
    dailyDataset[districtName][cpvCategory] = {};
    leaves[districtName][cpvCategory] = {};
    dailyLeaves[districtName][cpvCategory] = {};
    for (process of processes) {
        dataset[districtName][cpvCategory][process] = {};
        dataset[districtName][cpvCategory][process].amount = [];
        dataset[districtName][cpvCategory][process].type = [];
        dataset[districtName][cpvCategory][process].total = 0;

        dailyDataset[districtName][cpvCategory][process] = {};
        dailyDataset[districtName][cpvCategory][process].amount = [];
        dailyDataset[districtName][cpvCategory][process].type = [];
        dailyDataset[districtName][cpvCategory][process].total = 0;

        leaves[districtName][cpvCategory][process] = {};
        dailyLeaves[districtName][cpvCategory][process] = {};

    }
}
//--------------------------------------------------------------------------------
//                   MUNICIPALITY (2 LEVEL)
//--------------------------------------------------------------------------------
for (municipality of municipalitiesNames) {
    dataset[districtName].municipalities[municipality] = {};
    dailyDataset[districtName].municipalities[municipality] = {};
    leaves[districtName].municipalities[municipality] = {};
    dailyLeaves[districtName].municipalities[municipality] = {};
    for (cpvCategory of CPVsCategoriesNames) {
        dataset[districtName].municipalities[municipality][cpvCategory] = {};
        dailyDataset[districtName].municipalities[municipality][cpvCategory] = {};
        leaves[districtName].municipalities[municipality][cpvCategory] = {};
        dailyLeaves[districtName].municipalities[municipality][cpvCategory] = {};
        for (process of processes) {
            dataset[districtName].municipalities[municipality][cpvCategory][process] = {};
            dataset[districtName].municipalities[municipality][cpvCategory][process].amount = [];
            dataset[districtName].municipalities[municipality][cpvCategory][process].type = [];
            dataset[districtName].municipalities[municipality][cpvCategory][process].total = 0;

            dailyDataset[districtName].municipalities[municipality][cpvCategory][process] = {};
            dailyDataset[districtName].municipalities[municipality][cpvCategory][process].amount = [];
            dailyDataset[districtName].municipalities[municipality][cpvCategory][process].type = [];
            dailyDataset[districtName].municipalities[municipality][cpvCategory][process].total = 0;

            leaves[districtName].municipalities[municipality][cpvCategory][process] = {};
            dailyLeaves[districtName].municipalities[municipality][cpvCategory][process] = {};
        }
    }
}

function resetDataset() {
    dailyDataset[districtName] = {};
    dailyLeaves[districtName] = {};

    dailyDataset[districtName].municipalities = {};
    dailyLeaves[districtName].municipalities = {};

    for (cpvCategory of CPVsCategoriesNames) {

        dailyDataset[districtName][cpvCategory] = {};
        dailyLeaves[districtName][cpvCategory] = {};

        for (process of processes) {

            dailyDataset[districtName][cpvCategory][process] = {};
            dailyDataset[districtName][cpvCategory][process].amount = [];
            dailyDataset[districtName][cpvCategory][process].type = [];
            dailyDataset[districtName][cpvCategory][process].total = 0;

            dailyLeaves[districtName][cpvCategory][process] = {};
        }
    }

    for (municipality of municipalitiesNames) {
        dailyDataset[districtName].municipalities[municipality] = {};
        dailyLeaves[districtName].municipalities[municipality] = {};

        for (cpvCategory of CPVsCategoriesNames) {

            dailyDataset[districtName].municipalities[municipality][cpvCategory] = {};
            dailyLeaves[districtName].municipalities[municipality][cpvCategory] = {};

            for (process of processes) {

                dailyDataset[districtName].municipalities[municipality][cpvCategory][process] = {};
                dailyDataset[districtName].municipalities[municipality][cpvCategory][process].amount = [];
                dailyDataset[districtName].municipalities[municipality][cpvCategory][process].type = [];
                dailyDataset[districtName].municipalities[municipality][cpvCategory][process].total = 0;

                dailyLeaves[districtName].municipalities[municipality][cpvCategory][process] = {};
            }
        }
    }
}

let max = -1;
let min = 999999999999;


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                      STATS
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let numberLeaves = 0;
let numberContracts = 0;
let totalContracts = 0;

let statsContractsSector = {
    Saúde: [0, 0],
    Alimentação: [0, 0],
    Comércio: [0, 0],
    Comunicação: [0, 0],
    Indústria: [0, 0],
    Transportes: [0, 0],
    Cultura: [0, 0],
    Construção: [0, 0],
    Tecnologia: [0, 0],
    Educação: [0, 0],
    Consultadoria: [0, 0],
    Sociedade: [0, 0]
};

let statsContractsDistrict = {
    "Mira": [0, 0],
    "Figueira da Foz": [0, 0],
    "Cantanhede": [0, 0],
    "Montemor-o-Velho": [0, 0],
    "Soure": [0, 0],
    "Coimbra": [0, 0],
    "Condeixa-a-Nova": [0, 0],
    "Penacova": [0, 0],
    "Miranda do Corvo": [0, 0],
    "Penela": [0, 0],
    "Vila Nova de Poiares": [0, 0],
    "Lousã": [0, 0],
    "Tábua": [0, 0],
    "Arganil": [0, 0],
    "Góis": [0, 0],
    "Oliveira do Hospital": [0, 0],
    "Pampilhosa da Serra": [0, 0]
};

let topDistricts = [];
let topSectors = [];


function preload() {
    myFont = loadFont('fonts/NeueMachina-Regular.otf');
}


let serial;
let portName = '/dev/cu.usbserial-14210'; // fill in your serial port name here

let inDatas = new Array(7).fill("");
let inData = "";
let inData2 = "";
let inData3 = "";
let inData4 = "";
let inData5 = "";
let inData6 = "";
let inData7 = "";

let entereds = new Array(7).fill(false);
let entered = false;

let insides = new Array(7).fill(false);
let inside = false;
let inito;
let initos = new Array(7).fill(0);

let insideNumber = 0;

let state = "";
let state2 = "";
let state3 = "";
let state4 = "";
let state5 = "";
let state6 = "";
let state7 = "";

function setup() {

    
    canvas = createCanvas(windowWidth, windowHeight, SVG); //SVG
    canvas.position(0, 0);
    $("#canvas").append($(".p5Canvas"));
    textFont(myFont);
    textSize(10);


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //                  ARDUINO SERIAL CONNECTION
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    


    serial = new p5.SerialPort(); // make a new instance of the serialport library
    serial.open(portName); // open a serial port
    serial.on('connected', serverConnected);
    serial.on('list', gotList);
    serial.on('error', serialError); // callback for errors
    serial.on('data', serialEvent); // callback for when new data arrives

    serial.clear();

}


function serverConnected() {
    console.log("connected to server");
}

function gotList(list) {
    for (let i = 0; i < list.length; i++) {
        println(i + " " + list[i])
    }
}

function serialEvent() {
    // read a byte from the serial port:
    let dist = serial.readLine();
    inDatas[0] = dist.split(",")[0];
    inDatas[1] = dist.split(",")[1];

    inData = dist.split(",")[0];
    inData2 = dist.split(",")[1];
    //console.log(inData,inData2)
}

function serialError(err) {
    print('Something went wrong with the serial port. ' + err);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

setInterval(checkSensors, 100);

function checkSensors() {
    
    checkPeople()
    if (insideNumber !== 0) {
        checkMunicipality();
    }
}

function checkPeople() {

    for (let i = 0; i < inDatas.length; i++) {

        if (inDatas[i] < 50 && inDatas[i] < 3000 && inDatas[i] !== "") {
            if (!entereds[i]) {
                entereds[i] = true;
                initos[i] = millis();
                
            }
            if (entereds[i] && !insides[i]) {

                if (millis() - initos[i] > 2000) {

                    insideNumber++;
                    municipalityMode = true;
                    updateData(datasets.length - 1, type);
                    insides[i] = true;
                    initos[i] = undefined;

                }
            }
        }

        if (inDatas[i] > 200 && inDatas[i] < 3000 && inDatas[i] !== "" && insides[i]) {
            if (insideNumber > 0) {;
                insides[i] = false;
                entereds[i] = false;
                insideNumber--;

                $("#" + (i+1)).css("visibility", "hidden");

                if (insideNumber == 0) {
                    $(".details").css("visibility", "hidden");
                    insides[i] = false;
                    leafDetails = false;
                    entereds[i] = false;
                    municipalityMode = false;
                    updateData(datasets.length - 1, type);
                }
            }

        }
    }
}


function checkMunicipality() {

    if (inDatas[0] < 200 && insides[0]) {
        if (inDatas[0] < 20 && state !== municipalitiesNames[0]) municipalityData(municipalitiesNames[0], 1);                           // Mira
        else if (inDatas[0] > 20 && state !== municipalitiesNames[1]) municipalityData(municipalitiesNames[1], 1);                      // Figueira
    }
    if (inDatas[1] < 200 && insides[1]) {
        if (inDatas[1] < 10 && state2 !== municipalitiesNames[2]) municipalityData(municipalitiesNames[2], 2);                         // Cantanhede
        else if (inDatas[1] > 10 && inDatas[1] < 20 && state2 !== municipalitiesNames[3]) municipalityData(municipalitiesNames[3], 2);    // Montemor
        else if (inDatas[1] > 20 && inDatas[1] < 30 && state2 !== municipalitiesNames[4]) municipalityData(municipalitiesNames[4], 2);    // Soure
    }
   
}

function municipalityData(municip, sensor) {
    switch (sensor) {
        case 1:
            state = municip;
            break;
        case 2:
            state2 = municip;
            break;
        case 3:
            state3 = municip;
            break;
        case 4:
            state4 = municip;
            break;
        case 5:
            state5 = municip;
            break;
        case 6:
            state6 = municip;
            break;
        case 7:
            state7 = municip;
            break;
    }

    $("#" + sensor + "> .row").empty();

    $("#" + sensor).css({
        top: municipalities[municip][1] + module - gap,
        left: municipalities[municip][0] + module - gap
    });
    $("#" + sensor).css("visibility", "visible");

    $.each(dataset.Coimbra.municipalities[municip], function (key, val) {
        $("#" + sensor + "> .row:first-child").append("<h2> " + key);
        $.each(val, function (key, val2) {
            if (val2.amount.length !== 0) {
                $("#" + sensor + "> .row:last-child").append("<p> " + key);
                $("#" + sensor + "> .row:last-child").append("<p> " + val2.total + "€");
            }
        });
    });

    leafDetails = true;
}

let leafDetails = false;



function setPosition(municipality, cpvCategory) {

    let municipalityX = municipalities[municipality][0];
    let municipalityY = municipalities[municipality][1];

    let cpvCategoryX = CPVsPositions[cpvCategory][0];
    let cpvCategoryY = CPVsPositions[cpvCategory][1];

    let posX;
    let posY
    if (municipalityMode) {
        posX = municipalityX + gap * 1.5 * cpvCategoryX + module;
        posY = municipalityY + gap * 1.5 * cpvCategoryY + module;
      
    } else {
        size = 7;
        posX = width / 2 - module + gap * 2 * cpvCategoryX + gap * 4 ;
        posY = height / 2 - module + gap * 2 * cpvCategoryY + gap * 4;
    }

    noFill();
    stroke(234, 234, 20)
    ellipse(posX, posY, 5, 5)
    ellipse(width / 2, height / 2, 10, 10)

    
    return [posX, posY];
}



function updateData(index, type) {

    noStroke();
    background(36);
    console.log("cucu");

    let kv; // KEY-VALUES DADOS PARA O INDEX X CUMULATIVO/DIÁRIO


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                  DISTRICT (1 LEVEL)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    
    if (!municipalityMode) {
        resizeCanvas(windowWidth, windowHeight);
       

        for (cpvCategory of CPVsCategoriesNames) {
            let pos = setPosition(districtName, cpvCategory);

            for (let i = 0; i < processes.length; i++) {
                if (type == true) kv = Object.values(datasets[index][districtName][cpvCategory][processes[i]]);
                else kv = Object.values(dailyDatasets[index][districtName][cpvCategory][processes[i]]);
                if (kv[2] !== 0) { 
                    if (type == true) { 

                        if (leaves[districtName][cpvCategory][processes[i]].leaf === undefined) {
                            leaves[districtName][cpvCategory][processes[i]].leaf = new Leaf(pos, -HALF_PI + i * (TWO_PI / 5), 40, datasets[index][districtName][cpvCategory][processes[i]]);
                            leafs.push(leaves[districtName][cpvCategory][processes[i]].leaf);
                            numberLeaves++;
                            $('#defaultCanvas0 > svg > g:nth-child(3) > g > g:last-child').addClass("lefas");
                            $(".lefas").hide();
                        } else {
                            
                            leaves[districtName][cpvCategory][processes[i]].leaf.updateVal(datasets[index][districtName][cpvCategory][processes[i]]);
                        }
                        leaves[districtName][cpvCategory][processes[i]].leaf.display();

                    } else { 
                        if (dailyLeaves[districtName][cpvCategory][processes[i]].leaf === undefined) {
                            dailyLeaves[districtName][cpvCategory][processes[i]].leaf = new Leaf(pos, -HALF_PI + i * (TWO_PI / 5), 40, dailyDatasets[index][districtName][cpvCategory][processes[i]]);
                            dailyLeafs.push(dailyLeaves[districtName][cpvCategory][processes[i]].leaf);
                            numberLeaves++;
                        } else {
                            dailyLeaves[districtName][cpvCategory][processes[i]].leaf.updateVal(dailyDatasets[index][districtName][cpvCategory][processes[i]]);
                        }

                        dailyLeaves[districtName][cpvCategory][processes[i]].leaf.display();
                    }
                }
            }
        }
        $('#defaultCanvas0 > svg > g:nth-child(3) > g').each(function () {
            $(this).addClass("lefas");
            $(".lefas").hide();
        });
        $(".lefas").fadeIn(1000);

    }



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                               MUNICIPALITY (2 LEVEL)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (municipalityMode) {
        resizeCanvas(8 * module, 6 * module);

        for (municipality of municipalitiesNames) {
            for (cpvCategory of CPVsCategoriesNames) {
                let pos = setPosition(municipality, cpvCategory);

                for (let i = 0; i < processes.length; i++) {
                    if (type == true) kv = Object.values(datasets[index][districtName].municipalities[municipality][cpvCategory][processes[i]]);
                    else kv = Object.values(dailyDatasets[index][districtName].municipalities[municipality][cpvCategory][processes[i]]);
                    if (kv[2] !== 0) { 
                        if (type == true) { 

                            if (leaves[districtName].municipalities[municipality][cpvCategory][processes[i]].leaf === undefined) {
                                leaves[districtName].municipalities[municipality][cpvCategory][processes[i]].leaf = new Leaf(pos, -HALF_PI + i * (TWO_PI / 5), 20, datasets[index][districtName].municipalities[municipality][cpvCategory][processes[i]]);
                                leafs.push(leaves[districtName].municipalities[municipality][cpvCategory][processes[i]].leaf);
                                numberLeaves++;
                                $('#defaultCanvas0 > svg > g:nth-child(3) > g:last-child').addClass("lefas");
                                $(".lefas").hide();
                            } else {
                                
                                leaves[districtName].municipalities[municipality][cpvCategory][processes[i]].leaf.updateVal(datasets[index][districtName].municipalities[municipality][cpvCategory][processes[i]]);
                            }
                            leaves[districtName].municipalities[municipality][cpvCategory][processes[i]].leaf.display();


                        } else { 
                            if (dailyLeaves[districtName].municipalities[municipality][cpvCategory][processes[i]].leaf === undefined) {
                                dailyLeaves[districtName].municipalities[municipality][cpvCategory][processes[i]].leaf = new Leaf(pos, -HALF_PI + i * (TWO_PI / 5), 20, dailyDatasets[index][districtName].municipalities[municipality][cpvCategory][processes[i]]);
                                dailyLeafs.push(dailyLeaves[districtName].municipalities[municipality][cpvCategory][processes[i]].leaf);
                                numberLeaves++;
                            } else {
                                dailyLeaves[districtName].municipalities[municipality][cpvCategory][processes[i]].leaf.updateVal(dailyDatasets[index][districtName].municipalities[municipality][cpvCategory][processes[i]]);
                            }

                            dailyLeaves[districtName].municipalities[municipality][cpvCategory][processes[i]].leaf.display();
                        }
                    }
                }
            }
        }
        $('#defaultCanvas0 > svg > g:nth-child(3) > g > pathl').each(function () {
            $(this).addClass("lefas");
            $(".lefas").hide();
        });

        $(".lefas").fadeIn(1000);
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //                          PASSA O CAULE DA FOLHA PARA TRÁS DAS PARTES DA FOLHA
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    $('#defaultCanvas0 > svg > g:nth-child(3) > g > path').each(function () {
        $(this).prependTo($(this).parent());
    });


    document.onclick = function (e) {
        if (mouseX < 500) {
            readData(stDate - inc);
            inc++;
        }

        for (let i = 0; i < leafs.length; i++) {
            if (leafs[i].overing(e.target.parentElement.tagName)) break;
        }

    }

}

function drawData(type) {
    noStroke();
    background(36);
    if (type) for (let i = 0; i < leafs.length; i++) leafs[i].display();
    else for (let i = 0; i < dailyLeafs.length; i++) dailyLeafs[i].display();
}

function processData() {

    let results = dados[dados.length - 1].reverse();
    $("#stats p").empty();

    resetDataset();


    for (let i = 0; i < results.length; i++) {

        try {

            let district = results[i]["Local de Execução"].split(", ")[2]; // [1] = DISTRITO  [2] = CONCELHO
            district = district.replace('\"', '');

            if (district.includes("<")) district = district.substr(0, district.indexOf('<')); // VAI BUSCAR O 1º LOCAL
           

            if (district == undefined) continue;


            let cpv = results[i]["CPV"].substr(0, 2);
            let category;
            for (cat in CPVsCategories) {

                if (CPVsCategories[cat].includes(cpv)) {
                    category = cat;
                    break;
                }
            }

            let amountRaw = results[i]["Preço Contratual"];

            amountRaw = amountRaw.replace(".", "");
            amountRaw = amountRaw.replace(",", ".");
            let amount = parseFloat(amountRaw.substr(1, amountRaw.length - 3));
        
            let process = results[i]["Tipo de Procedimento"];
            let contract = results[i]["Tipo(s) de Contrato"].split(" ")[0]; // AQUI TALVEZ PASSE A USAR O NOME COMPLETO

            /////////////////////////////////////////////////////////////////////////////////////////////////////////////


            if (process.includes("quadro")) process = "Ao abrigo de acordo-quadro";

            dataset[districtName][category][process].amount.push(amount);
            dataset[districtName][category][process].type.push(contract);
            dataset[districtName][category][process].total += amount;

            dailyDataset[districtName][category][process].amount.push(amount);
            dailyDataset[districtName][category][process].type.push(contract);
            dailyDataset[districtName][category][process].total += amount;

            dataset[districtName].municipalities[district][category][process].amount.push(amount);
            dataset[districtName].municipalities[district][category][process].type.push(contract);
            dataset[districtName].municipalities[district][category][process].total += amount;

            dailyDataset[districtName].municipalities[district][category][process].amount.push(amount);
            dailyDataset[districtName].municipalities[district][category][process].type.push(contract);
            dailyDataset[districtName].municipalities[district][category][process].total += amount;

            totalContracts += amount;
           
            numberContracts++;

        } catch (e) {
            console.log(e.stack, i);
        }
    }

    datasets.push(JSON.parse(JSON.stringify(dataset)));
    dailyDatasets.push(JSON.parse(JSON.stringify(dailyDataset)));

    updateData(datasets.length - 1, true);
    

    $("#numberLeaves").text(numberLeaves);
    $("#numberContracts").text(numberContracts);
    $("#numberContractsSector").text(statsContractsSector[1]);
    $("#numberContractsDistrict").text(statsContractsDistrict[1]);

    $("#totalContracts").text(totalContracts.toFixed(2) + "€");

    for (const prop in statsContractsSector) {
        let val = statsContractsSector[prop][0];
        val = val.toFixed(2);
        if (val != 0.00) $("#totalContractsSector").append('<li>' + prop + ' : ' + val + '€</li>');
        else $("#totalContractsSector").append('<li>' + prop + ' : — </li>');
    }

    for (const prop in statsContractsSector) {
        let val = statsContractsSector[prop][1];
        $("#numberContractsSector").append('<li>' + prop + ' : ' + val + '</li>');
    }


    for (const prop in statsContractsDistrict) {
        let val = statsContractsDistrict[prop][0];
        val = val.toFixed(2);
        if (val != 0.00) $("#totalContractsDistrict").append('<li>' + prop + ' : ' + val + '€</li>');
        else $("#totalContractsDistrict").append('<li>' + prop + ' : — </li>');
    }

    for (const prop in statsContractsDistrict) {
        let val = statsContractsDistrict[prop][1];
        $("#numberContractsDistrict").append('<li>' + prop + ' : ' + val + '</li>');
    }


    $("#topDistricts").text(topDistricts);
    $("#topSectors").text(topSectors);
}

let onDataReady = processData;

async function readData(d) {
    try {
        const day = new Date();
        day.setDate(day.getDate() - (d + 1));
        const date = day.getFullYear() + '-' + (day.getMonth() + 1) + '-' + (day.getDate());


        const curDate = day.getDate() + ' ' + (months[day.getMonth()]);
        const year = day.getFullYear();

        $("#currentDate").text(curDate);
        $("#currentDatey").text(year);

        const day2 = new Date();
        day2.setDate(day2.getDate() - d);
        const date2 = day2.getFullYear() + '-' + (day2.getMonth() + 1) + '-' + (day2.getDate());


        await fetch("http://localhost:3000/query?data1=" + date + "&data2=" + date2 + "", {})
            .then((response) => {
                return response.text();
            })
            .then((result) => {
                result = JSON.parse(csvJSON(result));
                dados.push(result);
                onDataReady(result);

            })
            .catch(err => console.log(err));


    } catch (e) {
        console.log("Error reading the data");
    }
}

function csvJSON(csv) {

    var lines = csv.split("\n");

    var result = [];

    var headers = lines[0].split(";");
    for (var i = 1; i < lines.length - 1; i++) {

        var obj = {};
        var currentline = lines[i].split(/\;(?=[^\s])/); // Exclui /((;)[^ ])/

        for (var j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }
        result.push(obj);
    }

    return JSON.stringify(result);
}

$('document').ready(function () {

    readData(stDate);


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //                              TOOGLE TYPE >> ACUMULATIVO (TRUE) & DIARIO (FALSE)
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    $(document).bind("keydown", function (event) {
        if (event.key == 't') { // TOOGLE DIARIO & ACUMULATIVO
            type = !type;
            updateData(datasets.length - 1, type);
            //drawData(type);
            $("#stats").toggle();
        }
        if (event.key == 'l') { // TOOGLE LEVEL DISTRITO & CONCELHOS
            municipalityMode = !municipalityMode;
            updateData(datasets.length - 1, type);
        }
    });


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //                                           MENU DROPDOWN ANIMATION
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }

    $(".loading-bar").slick({
        centerMode: true,
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 3,
        focusOnSelect: true,
        asNavFor: ".labels"
    });

    $(".labels").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        draggable: false,
        asNavFor: ".loading-bar"
    });
});