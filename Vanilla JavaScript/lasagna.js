export const PREPARATION_MINUTES_PER_LAYER = 2;
export const EXPECTED_MINUTES_IN_OVEN = 40;

export function remainingMinutesInOven(actualMinutesInOven) {
  let remainingMinutes = EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
  return remainingMinutes;
}

export function preparationTimeInMinutes(numberOfLayers) {
  let preparationTime = PREPARATION_MINUTES_PER_LAYER * numberOfLayers;
  return preparationTime;
}

export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  let totalTime = preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
  return totalTime;
}