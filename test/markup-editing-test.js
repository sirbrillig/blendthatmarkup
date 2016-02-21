const chai = require( 'chai' )
const blendthatmarkup = require( '../lib' )

const expect = chai.expect

const editableText = 'Hello world. This is some editable text.'
const markup = '<div class="page"><header>some title</header><div class="main"><img src="someimage.png"><p class="zero2">Lorem ipsum</p></div><i class="zero2">icon</i><div class="zero1">' + editableText + '</div></div>'
const newContent = 'Updated hello world. This is edited text.'
const updatedMarkup = '<div class="page"><header>some title</header><div class="main"><img src="someimage.png"><p class="zero2">Lorem ipsum</p></div><i class="zero2">icon</i><div class="zero1">' + newContent + '</div></div>'

const similarEditableText = 'Hello kind world. This is some very similar editable text.'
const similarMarkup = '<div class="page-similar"><header>some other title</header><div class="main"><span class="greetings">greetings</span><img src="someimage2.png"></div><div class="zero1">' + similarEditableText + '</div><p>something else</p></div>'
const updatedSimilarMarkup = '<div class="page-similar"><header>some other title</header><div class="main"><span class="greetings">greetings</span><img src="someimage2.png"></div><div class="zero1">' + newContent + '</div><p>something else</p></div>'

describe( 'getMarkupByKey()', function() {
	it( 'returns the content of the element matching the key', function() {
		expect( blendthatmarkup.getMarkupByKey( markup, 'zero1' ) ).to.eql( editableText )
	} )

	it( 'throws an error if there is no element matching the key', function() {
		expect( () => blendthatmarkup.getMarkupByKey( markup, 'foobar' ) ).to.throw( Error )
	} )

	it( 'throws an error if there is more than one element matching the key', function() {
		expect( () => blendthatmarkup.getMarkupByKey( markup, 'zero2' ) ).to.throw( Error )
	} )
} )

describe( 'updateMarkupWithKey()', function() {
	it( 'returns a copy of the markup with the element matching the key updated to match the new content', function() {
		expect( blendthatmarkup.updateMarkupWithKey( markup, 'zero1', newContent ) ).to.eql( updatedMarkup )
	} )

	it( 'returns a copy of similar markup with the element matching the key updated to match the new content', function() {
		expect( blendthatmarkup.updateMarkupWithKey( similarMarkup, 'zero1', newContent ) ).to.eql( updatedSimilarMarkup )
	} )

	it( 'throws an error if there is no element matching the key', function() {
		expect( () => blendthatmarkup.updateMarkupWithKey( similarMarkup, 'foobar', newContent ) ).to.throw( Error )
	} )

	it( 'throws an error if there is more than one element matching the key', function() {
		expect( () => blendthatmarkup.updateMarkupWithKey( similarMarkup, 'zero2', newContent ) ).to.throw( Error )
	} )
} )
