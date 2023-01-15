interface IGoogleFontVariant {
	[key: string]: number | number[];
}

interface IGoogleFont {
	family: string;
	variants: IGoogleFontVariant[];
}

const fromURL = (text: string): IGoogleFont[] | null => {
	const matches = text.match(/(https:\/\/fonts.googleapis.com\/css2\?[^"]*)/gm);
    
    if (matches === null){
        return null;
    }

    try{
        const params = matches.map((match: string) => {
            const { search } = new URL(match);
    
            return search.substring(1)
                         .split("&")
                         .filter((param: string) => param != "display=swap")
                         .map((param: string) => param.substring(7));
        }).flat();

        return params
            .filter((param: string) => param != '' && param != ' ')
            .map((param: string) => {

                const [family, data] = param.split(':');
                const [rawKeys, rawValues] = data.split('@');
				const keys = rawKeys.split(",");
				const values = rawValues.split(";").map((rawValue) => rawValue.split(","));

                const variants = values.map((value) => {
                    return value.reduce((accumulator, currentValue, index) => {
                        const key = keys[index];
                        const variable = currentValue.includes("..");

						return {
							...accumulator,
							[key]: variable
                            ? currentValue.split("..").map((bound) => Number(bound))
                            : Number(currentValue)
						};
                    }, {});
                });

                return {
					family: family.replace("+", " "),
					variants: variants
				};
            })
    }
    catch(error){
        return null;
    }
}

const toURL = (fonts: IGoogleFont[] | null): string | null => {
    if(fonts === null){
        return null;
    }

    const params: string[] = fonts.map((font: IGoogleFont): string=> {
        const { variants, family } = font;

        const name   = family.replace(' ', '+');
        const values = variants.map((variant: IGoogleFontVariant) => {
            return Object.values(variant).join(',');
        }).join(';');
        const keys   = Object.keys(variants[0]).join(',');
        return `family=${name}:${keys}@${values}`
    });

    return `https://fonts.googleapis.com/css2?${params.join("&")}&display=swap`;
}

export type { IGoogleFontVariant };
export default IGoogleFont;
export { fromURL, toURL };