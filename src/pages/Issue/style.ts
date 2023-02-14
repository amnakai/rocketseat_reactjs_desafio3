import styled from 'styled-components'

export const IssueContainer = styled.main`
  width: 100%;
  max-width: 864px;
  margin: -5.5rem auto 0;
  padding: 0 1.5rem;
`

export const IssueTitleContainer = styled.div`
    width: 100%;
    background: ${(props) => props.theme['base_profile']};
    border-radius: 10px;
    padding: 2rem 2.5rem;
    display: flex;
    flex-direction: column;
`

export const IssueTitleLinks = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: top;
    margin-bottom: 1rem;

    strong {
        font-size: 1.5rem;
        font-weight: bold;
        color: ${(props) => props.theme['base_title']};
    }
    
    a {
        font-size: 0.75rem;
        color: ${(props) => props.theme['blue']};
    }

`

export const IssuTitle = styled.div`
    font-size: 1.5rem;
    color: : ${(props) => props.theme['base_title']};
    font-weight: bold;
`

export const IssueTitleFooter = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 2rem;
    padding-top: 1rem;
    color: : ${(props) => props.theme['base_subtitle']};
    
    div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

`

export const IssueContent = styled.div`
    width: 100%;
    color: ${(props) => props.theme['base_text']};
    padding: 2rem 2.5rem;
`