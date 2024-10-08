console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"

console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));
function slugify(string) 
{
    let slug = '';
    for(let i = 0; i < string.length; i++)
    {
        let char = string[i].toLowerCase();
        if(char===' ')
        {
            slug+='-';
        }
        else
        {
            slug+=char;
        }
    }
    return slug;
}