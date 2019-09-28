import chromeProfileList from 'chrome-profile-list'

export const getActivityProfiles = (browser: string): Promise<{}> => 
	new Promise(resolve => resolve(chromeProfileList()))

