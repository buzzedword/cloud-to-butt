walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bdoge\b/g, "a pathetically amusing dog");
	v = v.replace(/\bDoge\b/g, "A more pathetically, mildly amusing dog");
	v = v.replace(/\bwow. so\b/g, "meh. actually not so");
	v = v.replace(/\bwow. So\b/g, "meh. actually not so");
	v = v.replace(/\bwow, so\b/g, "meh, actually not so");
	v = v.replace(/\bwow, So\b/g, "meh, actually not so");
	v = v.replace(/\bwow. such\b/g, "meh. actually not such");
	v = v.replace(/\bwow. Such\b/g, "meh. actually not such");
	v = v.replace(/\bwow. much\b/g, "meh. actually not much");
	v = v.replace(/\bwow. Much\b/g, "meh. actually not much");
	v = v.replace(/\bwow, such\b/g, "meh, actually not such");
	v = v.replace(/\bwow, Such\b/g, "meh, actually not such");
	v = v.replace(/\bwow, much\b/g, "meh, actually not much");
	v = v.replace(/\bwow, Much\b/g, "meh, actually not much");
	
	textNode.nodeValue = v;
}


