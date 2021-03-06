/**
 * Filters list of components by component name.
 *
 * @param {Array} components
 * @param {string} name
 * @return {Array}
 */
export default function filterComponentsByExactName(
	components: Rsg.Component[],
	name: string
): Rsg.Component[] {
	return components.filter(component => component.name === name);
}
