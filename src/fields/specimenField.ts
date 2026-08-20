/** Specimen section — default text and optional paragraph samples (max 3) for the interactive tester */

/** Options for createSpecimenField */
export interface CreateSpecimenFieldOptions {
	/**
	 * Include the `textRole` radio, which drives the specimen reading layouts.
	 * Only MCKL renders these layouts today. Default: false
	 */
	textRole?: boolean
}

/** Creates the specimen section field, optionally including the text-role selector */
export function createSpecimenField(options: CreateSpecimenFieldOptions = {}) {
	const { textRole = false } = options

	const fields: object[] = [
		{
			title: 'Initial Text',
			name: 'initial_text',
			description: "Choose a short sentence that you'd like to be the default for this direction before someone types out.",
			type: 'string',
		},
	]

	if (textRole) {
		fields.push({
			title: 'Text role',
			name: 'textRole',
			description: 'Controls the specimen reading layouts. "text" unlocks small-size, multi-column reading; "display" (or blank) uses the display shuffle.',
			type: 'string',
			options: {
				list: [
					{ title: 'Text', value: 'text' },
					{ title: 'Display', value: 'display' },
				],
				layout: 'radio',
			},
		})
	}

	fields.push({
		title: 'Paragraphs',
		name: 'paragraphs',
		description: 'Recommend to include if the typeface has a text face. Include 1–3.',
		type: 'array',
		of: [
			{
				type: 'text',
				rows: 3,
				title: 'Paragraph Text',
				name: 'paragraphText',
			},
		],
		validation: (Rule: any) => Rule.max(3),
	})

	return {
		title: 'Specimen Section',
		name: 'specimen',
		type: 'object' as const,
		fields,
	}
}

/**
 * The specimen section without the text-role selector.
 *
 * Kept as a plain object so existing consumers (Darden, TDF) keep working unchanged.
 */
export const specimenField = createSpecimenField()
