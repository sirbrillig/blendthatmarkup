import cheerio from 'cheerio'

export function getMarkupByKey( markup, key ) {
	const findInPage = cheerio.load( markup )
	const elements = findInPage( `.${key}` )
	if ( elements.length === 0 ) throw new Error( `No elements found matching key "${key}"` )
	if ( elements.length !== 1 ) throw new Error( `More than one element found matching key "${key}"` )
	return elements.html()
}

export function updateMarkupWithKey( markup, key, content ) {
	const findInPage = cheerio.load( markup )
	const elements = findInPage( `.${key}` )
	if ( elements.length === 0 ) throw new Error( `No elements found matching key "${key}"` )
	if ( elements.length !== 1 ) throw new Error( `More than one element found matching key "${key}"` )
	elements.html( content )
	return findInPage.html()
}
