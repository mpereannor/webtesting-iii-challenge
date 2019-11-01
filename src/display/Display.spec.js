// Test away!
import React from 'react';

import * as rtl from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import Display from './Display';

afterEach(rtl.cleanup);

let wrapper;

beforeEach(() => {
    wrapper = rtl.render(<Display/>);
})

describe('Display Component', () => {
    it ('matches the snapshot', () => {
        expect(wrapper.container).toMatchSnapshot();
    });

    it ('displays if gate is open/closed', () => {
        let open = wrapper.queryByText(/open/i);
        let closed = wrapper.queryByText(/closed/i);
        expect(open || closed).toBeInTheDocument();
    });

    it ('displays if gate is locked/unlocked', () => {
        let locked = wrapper.queryByText(/locked/i);
        let unlocked = wrapper.queryByText(/unlocked/i);
        expect(locked || unlocked).toBeInTheDocument();
    });

    it('displays `closed` when the gate is closed', () => {
        wrapper = rtl.render( <Display closed ={true} />);
        expect(wrapper.queryByText(/closed/i)).toBeInTheDocument();
    });

    it('displays `locked` when gate is locked', () => {
        rtl.cleanup();
        wrapper = rtl.render(<Display closed={true}/>);
        expect(wrapper.queryByText(/unclocked/i)).not.toBeInTheDocument();
        expect(wrapper.queryByText(/locked/i)).toBeInTheDocument();
    });

    it('uses the red-led class when locked or closed', () => { 
        rtl.cleanup();
        wrapper = rtl.render(<Display locked={true} closed={true}/>);
        expect(wrapper.queryByText(/Locked/i)).toHaveClass("red-led");
        expect(wrapper.queryByText(/Closed/i)).toHaveClass("red-led");
    });

    it('uses the green-led class when unlocked or open', () => {
        rtl.cleanup();
        wrapper= rtl.render(<Display unlocked={true} open={true}/>);
        expect(wrapper.queryByText(/Unlocked/i)).toHaveClass("green-led");
        expect(wrapper.queryByText(/Open/i)).toHaveClass("green-led");

    })
})