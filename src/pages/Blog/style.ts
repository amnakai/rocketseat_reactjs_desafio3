import styled from 'styled-components'

export const BlogContainer = styled.main`
  width: 100%;
  max-width: 864px;
  margin: -5.5rem auto 0;
  padding: 0 1.5rem;
`

export const ProfileContainer = styled.div`
    width: 100%;
    background: ${(props) => props.theme['base_profile']};
    border-radius: 10px;
    padding: 2rem 2.5rem;
    display: grid;
    grid-template-columns: 9.25rem 1fr;
    gap: 2rem;
`

export const ProfileImg = styled.img`
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
`

export const ProfileContent = styled.div`
    display: flex;
    flex-direction: column;

`

export const ProfileHeader = styled.div`
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
        text-decoration: none;
    }

    &:hover {
        cursor: pointer;
        text-decoration: none;
    }

    &:active {
        color: ${(props) => props.theme['blue']};
        text-decoration: none;
    }

`

export const ProfileDescription = styled.div`
    flex: 1;
`

export const ProfileFooter = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 2rem;
    color: : ${(props) => props.theme['base_subtitle']};
    
    div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

`

export const PublicationCounterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 4rem;

    strong {
        color: : ${(props) => props.theme['base_subtitle']};
        font-size: 1.125rem;
    }

    span {
        color: : ${(props) => props.theme['base_span']};
        font-size: 0.875rem;
    }
`

export const PublicationSearchForm = styled.form`
    display: flex;
    margin-top: 0.5rem;

    input {
        flex: 1;
        background: ${(props) => props.theme['base_background']};
        border: 1px solid  ${(props) => props.theme['base_border']};
        border-radius: 6px;
        padding: 0.75rem 1rem ;
        color: ${(props) => props.theme['base_text']};


        &::placeholder {
            color: ${(props) => props.theme['base_label']};
        }
    }

    input:focus {
        background: ${(props) => props.theme['base_input']};
    }
`

export const PostListContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-top: 2rem;

    a {
        text-decoration: none;
        color: ${(props) => props.theme['base_text']};
    }

    &:hover {
        cursor: pointer;
        text-decoration: none;
        color: ${(props) => props.theme['base_text']};
    }

    &:active {
        text-decoration: none;
        color: ${(props) => props.theme['base_text']};
    }

    &:visited {
        text-decoration: none;
        color: ${(props) => props.theme['base_text']};
    }
`