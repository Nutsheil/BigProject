type modsType = Record<string, boolean>;

export function classNames(cls: string, mods?: modsType, additional?: string | string[]): string {

	const getAdditional = (): string => {
		if (!additional)
			return '';

		if (typeof additional === 'string')
			return additional;
	
		return additional.filter(Boolean).join(' ');
	}

	return [
		cls,
		getAdditional(),
		...Object.entries(mods)
			.filter(([, isActive]) => Boolean(isActive))
			.map(([className]) => className)
	].join(' ');

}