import React, { useEffect } from 'react';
import Layout from '../../Layout/Index'
import MetaHead from '../../Components/MetaHead'

function Home() {
    return (
        <Layout>
            <MetaHead title="Awesome Website" name="descrpition" content="This is my first InertaJS App" />
            <h1>Home</h1>
            <p>lorem ipsum dolor</p>
        </Layout>
    )
}
export default Home