// Test away!
import React from 'react';

import * as rtl from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import Controls from './Controls';

afterEach(rtl.cleanup);

let wrapper;

beforeEach(() => {
wrapper = rtl.render(<Controls locked={false} closed={false}/>);
})

describe('Controls Component', () => {
    it ('matches the snapshot', () => {
        expect(wrapper.container).toMatchSnapshot();
    });
    it("provides buttons to toggle the closed and locked states", () => {
		let lockButton = wrapper.getByTestId("locked");
		let closeButton = wrapper.getByTestId("closed");
		expect(lockButton).toBeInTheDocument();
		expect(closeButton).toBeInTheDocument();
	});
})