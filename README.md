# FriendFinder
A Mock Friend Finder App

By Steven Henke

Looking for a new friend.  Take this survey and see what locals might make good friends.

Don't forget to add a photo.


|Method|Path|Data In|Data Out|Description|
|-----|----|----|-----|-----|
Get |/survey|null|html| takes you to the survey page
Get| /api/friends|null |Friends Array Data| Takes you to the friends Data|
|Post| /survey| Form Data and survey data| Best Match| Post your survey data to friends array and returns closest match