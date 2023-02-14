import { ArrowSquareOut, Buildings, Cat, User } from "phosphor-react";
import { Post } from "./components/Post";
import { BlogContainer, PostListContainer, ProfileContainer, ProfileContent, ProfileDescription, ProfileFooter, ProfileHeader, ProfileImg, PublicationCounterContainer, PublicationSearchForm } from "./style";

export function Blog() {
    return (
        <BlogContainer>
            <ProfileContainer>
                <ProfileImg src="https://avatars.githubusercontent.com/u/121870181?v=4"></ProfileImg>

                <ProfileContent>
                    <ProfileHeader>
                        <strong>Alan Nakai</strong>
                        <a>GITHUB <ArrowSquareOut size={12}/></a>
                    </ProfileHeader>

                    <ProfileDescription>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</ProfileDescription>

                    <ProfileFooter>
                        <div><Cat color="#3A536B" size={18}/> amnakai</div>
                        <div><Buildings color="#3A536B" size={18}/> Embrapa</div>
                        <div><User color="#3A536B" size={18}/> 0 seguidores</div>
                    </ProfileFooter>

                </ProfileContent>

            </ProfileContainer>


            <PublicationCounterContainer>
                <strong>Publicações</strong>
                <span>3 publicações</span>
            </PublicationCounterContainer>

            <PublicationSearchForm>
                <input placeholder="Buscar conteúdo"></input>
            </PublicationSearchForm>

            <PostListContainer>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </PostListContainer>

        </BlogContainer>
    );
}