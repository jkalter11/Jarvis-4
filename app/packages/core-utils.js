// Jarvis' core commands

module.exports = {
  "say": "say \"<ARG del='\\ ' />\"",
  "enhance": "osascript -e 'tell application \"System Events\"to repeat 2 times' -e 'key code 24 using {command down}' -e 'delay 0.1' -e 'end repeat'",
  "zoom in": "osascript -e 'tell application \"System Events\"to repeat 2 times' -e 'key code 24 using {command down}' -e 'delay 0.1' -e 'end repeat'",
  "zoom out": "osascript -e 'tell application \"System Events\" to repeat 2 times' -e 'key code 27 using {command down}' -e 'delay 0.1' -e 'end repeat'",
  "dehance": "osascript -e 'tell application \"System Events\" to repeat 2 times' -e 'key code 27 using {command down}' -e 'delay 0.1' -e 'end repeat'",
  "what time is it": "say $(date +'%r')",
  "what's todays date": "say $(date +'%m-%d-%Y')",
  "check the": "open https://www.google.com/?gws_rd=ssl#q=<ARG del='+' case='upper' />",
  "dim screen": "osascript -e 'tell application \"System Events\" to repeat 10 times' -e 'key code 107' -e 'delay 0.1' -e 'end repeat'",
  "bright screen": "osascript -e 'tell application \"System Events\" to repeat 10 times' -e 'key code 113' -e 'delay 0.1' -e 'end repeat'",
  "volume down": "osascript -e 'set volume 1'",
  "volume up": "osascript -e 'set volume 5'",
  "volume off": "osascript -e 'set volume 0'",
  "youtube": "open https://www.youtube.com/results?search_query=<ARG del='+' />",
  "google": "open https://www.google.com/?gws_rd=ssl#q=<ARG del='+' />",
  "wiki": "open https://en.wikipedia.org/wiki/<ARG del='_' />",
  "directions from": "open https://www.google.com/maps/dir/<ARG del='+' chainkey='to'/>/<ARG del='+' />/",
  "open": "open /Applications/<ARG del='\\ ' capitalize=true />.app"
};
