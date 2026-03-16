export const ADMINROLE = "ADMIN";

export const TEAMNAMES = [
	"CSK",
	"MI",
	"RCB",
	"KKR",
	"SRH",
	"DC",
	"PBKS",
	"RR",
	"LSG",
	"GT",
] as const;

export const TEAMS = [
	{ shortName: "CSK", longName: "Chennai Super Kings" },
	{ shortName: "MI", longName: "Mumbai Indians" },
	{ shortName: "RCB", longName: "Royal Challengers Bengaluru" },
	{ shortName: "KKR", longName: "Kolkata Knight Riders" },
	{ shortName: "SRH", longName: "Sunrisers Hyderabad" },
	{ shortName: "DC", longName: "Delhi Capitals" },
	{ shortName: "PBKS", longName: "Punjab Kings" },
	{ shortName: "RR", longName: "Rajasthan Royals" },
	{ shortName: "LSG", longName: "Lucknow Super Giants" },
	{ shortName: "GT", longName: "Gujarat Titans" },
] as const;

export const MATCH_TYPES = [
	"LEAGUE",
	"QUALIFIER1",
	"QUALIFIER2",
	"ELIMINATOR",
	"FINAL",
] as const;

export const MATCH_STATUS = ["SCHEDULED", "ABANDONED", "COMPLETED"] as const;
export const RESULT_TYPES = ["RUNS", "SUPEROVER", "WICKETS"] as const;
export const PRED_STATUS = [
	"WON",
	"LOST",
	"PLACED",
	"DEFAULT",
	"NORESULT",
] as const;
