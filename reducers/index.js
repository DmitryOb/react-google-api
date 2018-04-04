const initialState = [
	{"id":301,"type":"Buildings::Warehouse","name":"SST Britovo 1st phase building 2","building_grade":"a","status":"existing","latitude":55.483752,"longitude":38.153539},
	{"id":714,"type":"Buildings::Retail","name":"GUM","building_grade":null,"status":"existing","latitude":55.754709,"longitude":37.621521},
	{"id":1037,"type":"Buildings::Office","name":"Ducat Place III","building_grade":"a","status":"existing","latitude":55.768394,"longitude":37.590411},
	{"id":2249,"type":"Buildings::Office","name":"White Square","building_grade":"a","status":"existing","latitude":55.77826254,"longitude":37.58602023},
	{"id":2310,"type":"Buildings::Office","name":"Legend","building_grade":"a","status":"existing","latitude":null,"longitude":null},
	{"id":2335,"type":"Buildings::Warehouse","name":"Sherrizone-Nord","building_grade":"a","status":"existing","latitude":55.991539,"longitude":37.414364},
	{"id":81,"type":"Buildings::Warehouse","name":"FM Logistic Dmitrov","building_grade":"a","status":"existing","latitude":56.418903,"longitude":37.517677},
	{"id":1118,"type":"Buildings::Office","name":"Rinco Plaza","building_grade":"a","status":"existing","latitude":55.735686,"longitude":37.587664},
	{"id":1104,"type":"Buildings::Office","name":"Oruzheiny 41","building_grade":"a","status":"existing","latitude":55.773676,"longitude":37.60556},
	{"id":1137,"type":"Buildings::Office","name":"Vozdvizhenka Center","building_grade":"a","status":"existing","latitude":55.753233,"longitude":37.6063},
	{"id":2251,"type":"Buildings::Office","name":"White Gardens","building_grade":"a","status":"existing","latitude":55.778503,"longitude":37.587801},
	{"id":161,"type":"Buildings::Warehouse","name":"MLP Tomilino K1","building_grade":"a","status":"existing","latitude":55.656148,"longitude":37.915399},
	{"id":23,"type":"Buildings::Warehouse","name":"Technopark Bykovo building A","building_grade":"a","status":"existing","latitude":55.627138,"longitude":38.058027},
	{"id":80,"type":"Buildings::Warehouse","name":"FM Logistic Chekhov","building_grade":"a","status":"existing","latitude":55.114606,"longitude":37.530262},
	{"id":2334,"type":"Buildings::Warehouse","name":"MLP Podolsk","building_grade":"a","status":"existing","latitude":55.413393,"longitude":37.589068},
	{"id":410,"type":"Buildings::Warehouse","name":"Omega Lease Kaluga 1st phase","building_grade":"a","status":"existing","latitude":55.216061,"longitude":36.671365},
	{"id":155,"type":"Buildings::Warehouse","name":"MLP Leningradskiy Terminal (A)","building_grade":"a","status":"existing","latitude":55.97251342,"longitude":37.30690956},
	{"id":658,"type":"Buildings::Retail","name":"Aviapark","building_grade":null,"status":"existing","latitude":55.790509,"longitude":37.530549},
	{"id":768,"type":"Buildings::Retail","name":"Mozaika","building_grade":null,"status":"existing","latitude":55.710644,"longitude":37.675104},
	{"id":782,"type":"Buildings::Retail","name":"Okeania","building_grade":null,"status":"existing","latitude":55.72790759,"longitude":37.47678995},
	{"id":1027,"type":"Buildings::Office","name":"Delta Plaza","building_grade":"a","status":"existing","latitude":55.753785,"longitude":37.662073},
	{"id":672,"type":"Buildings::Retail","name":"Columbus","building_grade":null,"status":"existing","latitude":55.612136,"longitude":37.606999},
	{"id":2036,"type":"Buildings::Office","name":"Tower 2000","building_grade":"b+","status":"existing","latitude":55.746376,"longitude":37.546082},
	{"id":2244,"type":"Buildings::Warehouse","name":"Absolut warehouse","building_grade":"a+","status":"existing","latitude":55.512981,"longitude":37.789842},
	{"id":261,"type":"Buildings::Warehouse","name":"PLT Severnoe Sheremetievo B","building_grade":"a","status":"existing","latitude":56.093142,"longitude":37.346195},
	{"id":889,"type":"Buildings::Retail","name":"TRC Zelenopark","building_grade":null,"status":"existing","latitude":55.999311,"longitude":37.258911},
	{"id":1022,"type":"Buildings::Office","name":"Citydel","building_grade":"a","status":"existing","latitude":55.76164,"longitude":37.658124},
	{"id":1129,"type":"Buildings::Office","name":"Silver City","building_grade":"a","status":"existing","latitude":55.75060857,"longitude":37.65267849},
	{"id":2015,"type":"Buildings::Office","name":"Svyatogor 4","building_grade":"b+","status":"existing","latitude":55.72495915,"longitude":37.64291793}
]

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ACTION_NAME':
		default: return state;
	}
};

export default reducer;