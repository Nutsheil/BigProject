type modsType = Record<string, boolean>;

export function classNames(cls: string, mods?: modsType, additional?: string | string[]): string {
  const getAdditional = (): string[] => {
    if (!additional) return [];
    if (typeof additional === 'string') return [additional];
    return additional.filter(Boolean);
  };

  const getMods = (): string[] => {
    if (!mods) return [];

    return Object.entries(mods)
      .filter(([, isActive]) => Boolean(isActive))
      .map(([className]) => className);
  };

  // const result = [cls];
  // if (additional) result.push(...getAdditional());
  // if (mods) result.push(...getMods());

  return [
    cls,
    ...getAdditional(),
    ...getMods(),
  ].join(' ');
}
