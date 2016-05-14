// NOTE: Neither of these files are committed and for good reason.
//       You must provide your own.
var token = require("./slack_token.js").token;
var private_key = require("./service_account_key.js").key;

var config = {
    "token": token,

    "45+45": {
        "spreadsheet": {
            "key": "1BeRN76zaB_uCCrCra2yTEEw_r6C5_b8P59aN_BrJsyA",
            "service_account_auth": {
                "client_email": "chesster@chesster-lichess-4545-bot.iam.gserviceaccount.com",
                "private_key": private_key,
            },
            "schedule_colname": "time (mm/dd @ hh:mm*)",
            "results_colname": "result"
        },
        "scheduling": {
            "extrema": {
                "iso_weekday": 1,
                "hour": 11,
                "minute": 0,
                "warning_hours": 1
            },
            "warning_message": "Hi! Glad you got your game scheduled. Be warned though - it's cutting it pretty close to deadline! Please be on time and prompt with your game time, the league depends on it! Thanks, and if you have any questions, please contact the moderators.",
            "late_message": "Hi! Sorry, that time you posted is not an acceptable time. We need all games to end by 12:00 GMT on Monday, and we believe if you start then, you won't be done then! Please try and find a better time, and if you cannot, please contact the moderators.",
            "format": "MM/DD @ HH:mm"
        },
        "links": {
            "rules": "https://lichess4545.slack.com/files/parrotz/F0D7RD88L/lichess4545leaguerulesregulations",
            "team": "https://lichess4545.slack.com/files/mrlegilimens/F0VNACY64/lichess4545season3-graphs",
            "lone-wolf": "https://docs.google.com/spreadsheets/d/1p8RMKSKDryavipF5RzNOxIhonK5lOf6OkQPtpkzCRng",
            "guide": "http://bit.ly/1MW9YJ4",
            "captains": "https://lichess4545.slack.com/files/endrawes0/F0V3SPE90/guidelinesforlichess4545teamcaptains2.doc",
            "registration": "https://docs.google.com/a/georgetown.edu/forms/d/1u-fjOm1Mouz8J7WAsPhB1CJpB3k10FSp4-fZ-bwvykY/viewform",
            "source": "https://githaub.com/endrawes0/Chesster"
        }
    },
    "lonewolf": {
        // TODO:
    },
    "channel_map": {
        "lonewolf-results": "lonewolf",
        "lonewolf-gamelinks": "lonewolf",
        "lonewolf-scheduling": "lonewolf",
        "team-results": "45+45",
        "team-gamelinks": "45+45",
        "team-scheduling": "45+45",
    },

    "scheduling": {
        "lonewolf-scheduling": {
            "key": "1xBofd1bFIB4OBUOErWqFWTjTc0dFuTf6WlHxZf3FbIU",
            "colname": "game scheduled (in gmt)",
            "extrema": {
                "iso_weekday": 1,
                "hour": 22,
                "minute": 0,
                "warning_hours": 1
            },
            "warning_message": "Hi! Glad you got your game scheduled. Be warned though - it's cutting it pretty close to deadline! Please be on time and prompt with your game time, the league depends on it! Thanks, and if you have any questions, please contact the moderators.",
            "late_message": "Hi! Sorry, that time you posted is not an acceptable time. We need all games to end by 23:00 GMT on Monday, and we believe if you start then, you won't be done then! Please try and find a better time, and if you cannot, please contact the moderators.",
            "format": "MM/DD HH:mm"
        },
    },
    "results": {
        "lonewolf-results": {
            "key": "1xBofd1bFIB4OBUOErWqFWTjTc0dFuTf6WlHxZf3FbIU",
            "colname": "result"
        }	

    },
}
module.exports.config = config;
