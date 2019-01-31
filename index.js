function takeANumber(line, name)
{
  line.push(name)
  return "Welcome, " + name + ". You are number " + line.length + " in line."
}
function nowServing(line)
{
  if (line.length === 0) {return "There is nobody waiting to be served!"}
  else
  {
    var next = line[0]
    line.shift()
    return `Currently serving ${next}.`
  }
}
function currentLine(line) // this function returns a formatted string of the current line at the deli counter
{
  if(line.length === 0) {return "The line is currently empty."} //check to see if the line is empty
  else
  {
    var n = 1
    var intitialString = `The line is currently: 1. ${line[0]}`
    function makeString(n, string)
    {
      if(n === line.length){return string}
      else
      {
        string = `${string}, ${n + 1}. ${line[n]}`
        n++
         return makeString(n, string)
      }
    }
    var finalString = makeString(n, intitialString)
    return finalString
  }
}
