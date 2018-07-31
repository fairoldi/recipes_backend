Get-ChildItem ".\" -Filter *.jpg |
Foreach-Object {
	convert $_.FullName -thumbnail 500x500^ -gravity center -extent 500x500 ('.\resized\' + $_.BaseName + '.png')
}
