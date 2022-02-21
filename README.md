# Travelling Merchant Checker
Checks the Runescape wiki for items sold in the Travelling Merchant's Shop, and notifies you if that item is being sold today

Still a bit rough around the edges

# Usage (Subject to change)
*) Clone this repository
*) Open `index.js` in a text editor
*) Add an entry for the item you want to check, using the title of the desired wiki page
  *) i.e. `await checkWiki('Tangled fishbowl')`
*) Optionally, add a nice image to use in the notification. Currently only accepts png files, and expects the image name to have underscores instead of spaces (i.e. tangled_fishbowl.png)

# Future
*) Figure out a nice way of setting this up as a recurring, daily job in Windows
*) Make adding new entries nicer
*) Fetch an image to use if one doesn't already exist(?)
