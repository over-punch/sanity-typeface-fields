/**
 * Supported-languages field — the machine-generated list of languages a typeface covers.
 *
 * Stored as an array of language names (one per entry) rather than a comma-separated string, so the
 * list can be counted, filtered and diffed. Detection is derived from the fonts' character sets via
 * Hyperglot, so this is generated data: editors should not hand-edit it. Prose about additional or
 * on-request language support belongs in a separate notes field (Darden keeps `additionalLanguages`
 * for exactly that).
 *
 * Foundries that previously kept the list in a `metadata` row keyed "Languages" should migrate to
 * this field — see `languagesFieldNote` for the companion notes field.
 */
export const languagesField = {
	title: 'Supported Languages',
	name: 'languages',
	type: 'array' as const,
	of: [{ type: 'string' as const }],
	description:
		'Generated from the fonts’ character sets (Hyperglot). Use the “Detect languages” document action to populate — editing by hand will be overwritten on the next run.',
	options: {
		layout: 'tags' as const,
	},
}

/**
 * Companion notes field for language support that cannot be derived from the character set —
 * scripts licensed on request, or coverage provided through another distributor.
 *
 * Kept separate from `languagesField` so that regenerating the detected list can never overwrite
 * hand-written copy.
 */
export const languagesNoteField = {
	title: 'Additional Language Info',
	name: 'additionalLanguages',
	type: 'text' as const,
	rows: 2,
	description:
		'Free text shown beneath the language list — e.g. scripts available on request. Never touched by language detection.',
}
