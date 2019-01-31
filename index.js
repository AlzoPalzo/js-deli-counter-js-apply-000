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
    var intitialString = `The line is currently: 1. ${line[0]}` //this string contains the initial sentence aswell as the first person in the line
    function makeString(n, string) //this nested function builds the string based on thh current position(n) in the array
    {
      if(n === line.length){return string} // if the current position is the length of the array then the string is built and is returned
      else
      {
        string = `${string}, ${n + 1}. ${line[n]}`//adds the next name and its postion in the line to the string
        n++
         return makeString(n, string) //the function is recursive. It calls itself until the string is fully built
      }
    }
    var finalString = makeString(n, intitialString)
    return finalString
  }
}
