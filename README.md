# sanity-typeface-fields

[![npm version](https://img.shields.io/npm/v/@liiift-studio/sanity-typeface-fields.svg)](https://www.npmjs.com/package/@liiift-studio/sanity-typeface-fields)

Standalone Sanity field definitions for typeface documents. Import individual fields and drop them into any schema group — no opinion about document structure.

## Install

```bash
npm install @liiift-studio/sanity-typeface-fields
```

## Usage

```typescript
import {
	classificationField,
	createStateField,
	freeFontField,
	includesSerifField,
	sortHeaviestFirstField,
	buySectionColumnsField,
	fontSizeMultiplierField,
	releaseDateField,
	detailsField,
	specimenField,
	metadataField,
} from '@liiift-studio/sanity-typeface-fields'

export const typefaceSchema = defineType({
	name: 'typeface',
	type: 'document',
	fields: [
		defineField({ name: 'name', type: 'string', title: 'Name' }),
		classificationField,
		createStateField({
			publishedValue: 'published',
			publishedTitle: 'Published',
		}),
		freeFontField,
		includesSerifField,
		sortHeaviestFirstField,
		fontSizeMultiplierField,
		buySectionColumnsField,
		releaseDateField,
		detailsField,
		specimenField,
		metadataField,
	],
})
```

### `createStateField(options)`

Factory function for a customisable state selector field.

```typescript
const stateField = createStateField({
	publishedValue: 'live',
	publishedTitle: 'Live on site',
})
```

State options: 📝 Draft · ✅ Published · 🔒 Hidden · 📦 Archived

## Peer Dependencies

| Package | Version |
|---|---|
| `sanity` | `>=3` |
