import { ArrowSquareOut,  Buildings, Calendar, CaretLeft, Cat, ChatCircle, User } from "phosphor-react";
import { IssueContainer,  IssueTitleContainer,  IssuTitle, IssueTitleFooter, IssueTitleLinks, PublicationCounterContainer, PublicationSearchForm, IssueContent } from "./style";

export function Issue() {
    return (
        <IssueContainer>
            <IssueTitleContainer>

                <IssueTitleLinks>
                    <a><CaretLeft size={12}/> Voltar</a>
                    <a>GITHUB <ArrowSquareOut size={12}/></a>
                </IssueTitleLinks>

                <IssuTitle>Javascript data types and data structures</IssuTitle>

                <IssueTitleFooter>
                    <div><Cat color="#3A536B" size={18}/> amnakai</div>
                    <div><Calendar color="#3A536B" size={18}/> Há 1 dia</div>
                    <div><ChatCircle color="#3A536B" size={18}/> 0 comentários</div>
                </IssueTitleFooter>

            </IssueTitleContainer>

            <IssueContent>
            Programming languages all have built-in data structures, but these often differ from one language to another. This article base to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

            </IssueContent>
            
        </IssueContainer>


    );
}