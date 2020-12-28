const curObj = {
	curPathName: "",
	curKey: ""
};

export const setCurPathName = name => {
	curObj.curPathName = name;
};

export const setCurKey = key => {
	curObj.curKey = key;
};

export const getCurPathName = () => curObj.curPathName;

export const getCurKey = () => curObj.curKey;
