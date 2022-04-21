import styled from "styled-components";

export const Container = styled.div`
    /* height: 350px; */
    width: 100%;
    max-width: var(--max-width);
    background-color: #FFF;
    box-shadow: 0 8px 16px rgba(28,28,30,0.08);
    border-radius: var(--radius-small);
    padding: var(--space-xl);
    padding-bottom: var(--space-lg);

    /* padding: var(--space-lg); */
    /* padding-top: var(--space-xl); */
`;

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;

    /* border: 2px solid red; */
`;

export const Reverse = styled.div`
    margin-bottom: -3rem;
    color: var(--text-color-secondary);
`;

export const Bottom = styled.div`
    margin-top: var(--space-xl);
`;

export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
`;

export const SpanGroup = styled.div``;

export const Span = styled.span`
    font-weight: 500;
    font-size: var(--font-size-20);
    color: var(--text-color-primary);
`;

export const AddNewField = styled.button`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: none;
    outline: none;
    border: 0;
    gap: var(--space-sm);
`;

export const Plus = styled.div`
    width: 28px;
    height: 28px;
    color: #FAFAFA;
    border-radius: 50px;

    display: flex;
    justify-content: center;
    align-items: center;
    
    font-weight: bold;
    padding-bottom: 3px;
    font-size: var(--font-size-20);
    background-color: var(--color-positive);
`;

export const Label = styled.span`
    font-size: var(--font-size-16);
    font-weight: 500;
    color: var(--text-color-secondary);
    /* color: var(--color-positive); */

    &:hover{
        color: var(--color-positive);
    }
`;