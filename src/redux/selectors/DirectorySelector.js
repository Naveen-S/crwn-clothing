import { createSelector } from 'reselect';

const SectionSelector = (state) => state.directory; 
const getSection = (directory) => directory.sections;

export const DirectorySectionSelector = createSelector(SectionSelector, getSection);