import { NextApiRequest, NextApiResponse } from "next"
import mailchimp from '@mailchimp/mailchimp_marketing'

const Subscribe = async(req:NextApiRequest,res:NextApiResponse) => {
    mailchimp.setConfig({
        apiKey:process.env.MAILCHIMP_API_KEY,
        server:process.env.MAILCHIMP_SERVER
    });

    const {email} = req.body;

    if(!email){
        res.status(400).json({error:'Email Not Found'})
    }else{
        try {
            await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID || '',
                {
                    email_address:email,
                    status:'subscribed'
                })
            res.status(200).json({msg:'Email Sent Successfully'})
        } catch (error) {
            console.log(error)
            res.status(500).json({error:'An Error Occurred'})
        }
    }
}

export default Subscribe