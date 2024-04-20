const id = "imla";
const collection = "projects";
const data = {title:"Imla",icons:[{id:"javascript",collection:"tools"},{id:"css",collection:"tools"}],url:"https://imla.io/",thumbnail:
						new Proxy({"src":"/_astro/imla.BEG0j3KO.png","width":1561,"height":744,"format":"png","fsPath":"C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/content/projects/thumbnails/imla.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/content/projects/thumbnails/imla.png";
							}
							
							return target[name];
						}
					})
					};
const _internal = {
	type: 'data',
	filePath: "C:/Users/St3vA/LevelUp/Engineer/astro/portfolio/src/content/projects/imla.yaml",
	rawData: "title: Imla\r\nthumbnail: ./thumbnails/imla.png\r\nurl: \"https://imla.io/\"\r\nicons:\r\n  - javascript\r\n  - css\r\n",
};

export { _internal, collection, data, id };
