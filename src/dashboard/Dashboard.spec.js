// Test away!
import React from 'react';
import * as rtl from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import Dashboard from './Dashboard';

afterEach(rtl.cleanup);

let wrapper;

beforeEach(() => {
    wrapper = rtl.render(<Dashboard/>);
})

describe('Dashboard Component', () => {
    it ('matches the snapshot', () => {
        expect(wrapper.container).toMatchSnapshot();
    });

    it('shows the controls', () => {
        expect(wrapper.queryByText(/lock gate/i)).toBeInTheDocument();

        expect(wrapper.queryByText(/close gate/i)).toBeInTheDocument();
    });

    it('shows the display', () => {
        expect(wrapper.queryByText(/unlocked/i)).toBeInTheDocument();

        expect(wrapper.queryByText(/open/i)).toBeInTheDocument();
    })
})
