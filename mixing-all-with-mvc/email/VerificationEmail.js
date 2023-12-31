import nodemailer from "nodemailer";

export const sendVerificationEmail = (req, res) => {
    const transport = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
    });
    transport.sendMail({
        from: `devripon.io <${process.env.MAIL_USER}>`,
        to: req.body.email,
        subject: "Verification Email",
        html: `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
        <meta charset="UTF-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="x-apple-disable-message-reformatting" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta content="telephone=no" name="format-detection" />
        <title>New Template</title>
        <!--[if (mso 16)]>
            <style type="text/css">
                a {
                    text-decoration: none;
                }
            </style>
        <![endif]-->
        <!--[if gte mso 9
            ]><style>
                sup {
                    font-size: 100% !important;
                }
            </style><!
        [endif]-->
        <!--[if gte mso 9]>
            <xml>
                <o:OfficeDocumentSettings>
                    <o:AllowPNG></o:AllowPNG>
                    <o:PixelsPerInch>96</o:PixelsPerInch>
                </o:OfficeDocumentSettings>
            </xml>
        <![endif]-->
        <!--[if !mso]><!-- -->
        <link
            href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
            rel="stylesheet" />
        <!--<![endif]-->
        <style type="text/css">
            .rollover:hover .rollover-first {
                max-height: 0px !important;
                display: none !important;
            }
            .rollover:hover .rollover-second {
                max-height: none !important;
                display: inline-block !important;
            }
            .rollover div {
                font-size: 0px;
            }
            u ~ div img + div > div {
                display: none;
            }
            #outlook a {
                padding: 0;
            }
            span.MsoHyperlink,
            span.MsoHyperlinkFollowed {
                color: inherit;
                mso-style-priority: 99;
            }
            a.es-button {
                mso-style-priority: 100 !important;
                text-decoration: none !important;
            }
            a[x-apple-data-detectors] {
                color: inherit !important;
                text-decoration: none !important;
                font-size: inherit !important;
                font-family: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important;
            }
            .es-desk-hidden {
                display: none;
                float: left;
                overflow: hidden;
                width: 0;
                max-height: 0;
                line-height: 0;
                mso-hide: all;
            }
            .es-button-border:hover > a.es-button {
                color: #ffffff !important;
            }
            @media only screen and (max-width: 600px) {
                *[class="gmail-fix"] {
                    display: none !important;
                }
                p,
                a {
                    line-height: 150% !important;
                }
                h1,
                h1 a {
                    line-height: 120% !important;
                }
                h2,
                h2 a {
                    line-height: 120% !important;
                }
                h3,
                h3 a {
                    line-height: 120% !important;
                }
                h4,
                h4 a {
                    line-height: 120% !important;
                }
                h5,
                h5 a {
                    line-height: 120% !important;
                }
                h6,
                h6 a {
                    line-height: 120% !important;
                }
                h1 {
                    font-size: 30px !important;
                    text-align: center;
                }
                h2 {
                    font-size: 24px !important;
                    text-align: center;
                }
                h3 {
                    font-size: 20px !important;
                    text-align: center;
                }
                h4 {
                    font-size: 24px !important;
                    text-align: left;
                }
                h5 {
                    font-size: 20px !important;
                    text-align: left;
                }
                h6 {
                    font-size: 16px !important;
                    text-align: left;
                }
                .es-header-body h1 a,
                .es-content-body h1 a,
                .es-footer-body h1 a {
                    font-size: 30px !important;
                }
                .es-header-body h2 a,
                .es-content-body h2 a,
                .es-footer-body h2 a {
                    font-size: 24px !important;
                }
                .es-header-body h3 a,
                .es-content-body h3 a,
                .es-footer-body h3 a {
                    font-size: 20px !important;
                }
                .es-header-body h4 a,
                .es-content-body h4 a,
                .es-footer-body h4 a {
                    font-size: 24px !important;
                }
                .es-header-body h5 a,
                .es-content-body h5 a,
                .es-footer-body h5 a {
                    font-size: 20px !important;
                }
                .es-header-body h6 a,
                .es-content-body h6 a,
                .es-footer-body h6 a {
                    font-size: 16px !important;
                }
                .es-menu td a {
                    font-size: 14px !important;
                }
                .es-header-body p,
                .es-header-body a {
                    font-size: 14px !important;
                }
                .es-content-body p,
                .es-content-body a {
                    font-size: 14px !important;
                }
                .es-footer-body p,
                .es-footer-body a {
                    font-size: 14px !important;
                }
                .es-infoblock p,
                .es-infoblock a {
                    font-size: 12px !important;
                }
                .es-m-txt-c,
                .es-m-txt-c h1,
                .es-m-txt-c h2,
                .es-m-txt-c h3,
                .es-m-txt-c h4,
                .es-m-txt-c h5,
                .es-m-txt-c h6 {
                    text-align: center !important;
                }
                .es-m-txt-r,
                .es-m-txt-r h1,
                .es-m-txt-r h2,
                .es-m-txt-r h3,
                .es-m-txt-r h4,
                .es-m-txt-r h5,
                .es-m-txt-r h6 {
                    text-align: right !important;
                }
                .es-m-txt-j,
                .es-m-txt-j h1,
                .es-m-txt-j h2,
                .es-m-txt-j h3,
                .es-m-txt-j h4,
                .es-m-txt-j h5,
                .es-m-txt-j h6 {
                    text-align: justify !important;
                }
                .es-m-txt-l,
                .es-m-txt-l h1,
                .es-m-txt-l h2,
                .es-m-txt-l h3,
                .es-m-txt-l h4,
                .es-m-txt-l h5,
                .es-m-txt-l h6 {
                    text-align: left !important;
                }
                .es-m-txt-r img,
                .es-m-txt-c img,
                .es-m-txt-l img {
                    display: inline !important;
                }
                .es-m-txt-r .rollover:hover .rollover-second,
                .es-m-txt-c .rollover:hover .rollover-second,
                .es-m-txt-l .rollover:hover .rollover-second {
                    display: inline !important;
                }
                .es-m-txt-r .rollover div,
                .es-m-txt-c .rollover div,
                .es-m-txt-l .rollover div {
                    line-height: 0 !important;
                    font-size: 0 !important;
                }
                .es-spacer {
                    display: inline-table;
                }
                a.es-button,
                button.es-button {
                    font-size: 18px !important;
                }
                a.es-button,
                button.es-button {
                    display: inline-block !important;
                }
                .es-button-border {
                    display: inline-block !important;
                }
                .es-m-fw,
                .es-m-fw.es-fw,
                .es-m-fw .es-button {
                    display: block !important;
                }
                .es-m-il,
                .es-m-il .es-button,
                .es-social,
                .es-social td,
                .es-menu {
                    display: inline-block !important;
                }
                .es-adaptive table,
                .es-left,
                .es-right {
                    width: 100% !important;
                }
                .es-content table,
                .es-header table,
                .es-footer table,
                .es-content,
                .es-footer,
                .es-header {
                    width: 100% !important;
                    max-width: 600px !important;
                }
                .adapt-img {
                    width: 100% !important;
                    height: auto !important;
                }
                .es-mobile-hidden,
                .es-hidden {
                    display: none !important;
                }
                .es-desk-hidden {
                    width: auto !important;
                    overflow: visible !important;
                    float: none !important;
                    max-height: inherit !important;
                    line-height: inherit !important;
                }
                tr.es-desk-hidden {
                    display: table-row !important;
                }
                table.es-desk-hidden {
                    display: table !important;
                }
                td.es-desk-menu-hidden {
                    display: table-cell !important;
                }
                .es-menu td {
                    width: 1% !important;
                }
                table.es-table-not-adapt,
                .esd-block-html table {
                    width: auto !important;
                }
                .es-social td {
                    padding-bottom: 10px;
                }
                .h-auto {
                    height: auto !important;
                }
            }
        </style>
    </head>
    <body style="width: 100%; height: 100%; padding: 0; margin: 0">
        <div class="es-wrapper-color" style="background-color: #ffffff">
            <!--[if gte mso 9]>
                <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                    <v:fill type="tile" color="#ffffff"></v:fill>
                </v:background>
            <![endif]-->
            <table
                class="es-wrapper"
                width="100%"
                cellspacing="0"
                cellpadding="0"
                style="
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                    border-collapse: collapse;
                    border-spacing: 0px;
                    padding: 0;
                    margin: 0;
                    width: 100%;
                    height: 100%;
                    background-repeat: repeat;
                    background-position: center top;
                    background-color: #ffffff;
                ">
                <tr>
                    <td valign="top" style="padding: 0; margin: 0">
                        <table
                            cellpadding="0"
                            cellspacing="0"
                            class="es-header"
                            align="center"
                            style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                border-collapse: collapse;
                                border-spacing: 0px;
                                width: 100%;
                                table-layout: fixed !important;
                                background-color: transparent;
                                background-repeat: repeat;
                                background-position: center top;
                            ">
                            <tr>
                                <td align="center" style="padding: 0; margin: 0">
                                    <table
                                        bgcolor="#fad939"
                                        class="es-header-body"
                                        align="center"
                                        cellpadding="0"
                                        cellspacing="0"
                                        style="
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                            border-collapse: collapse;
                                            border-spacing: 0px;
                                            background-color: #ffffff;
                                            width: 510px;
                                        ">
                                        <tr>
                                            <td
                                                align="left"
                                                style="
                                                    padding: 0;
                                                    margin: 0;
                                                    padding-right: 20px;
                                                    padding-left: 20px;
                                                ">
                                                <table
                                                    cellpadding="0"
                                                    cellspacing="0"
                                                    width="100%"
                                                    style="
                                                        mso-table-lspace: 0pt;
                                                        mso-table-rspace: 0pt;
                                                        border-collapse: collapse;
                                                        border-spacing: 0px;
                                                    ">
                                                    <tr>
                                                        <td
                                                            align="center"
                                                            valign="top"
                                                            style="
                                                                padding: 0;
                                                                margin: 0;
                                                                width: 470px;
                                                            ">
                                                            <table
                                                                cellpadding="0"
                                                                cellspacing="0"
                                                                width="100%"
                                                                role="presentation"
                                                                style="
                                                                    mso-table-lspace: 0pt;
                                                                    mso-table-rspace: 0pt;
                                                                    border-collapse: collapse;
                                                                    border-spacing: 0px;
                                                                ">
                                                                <tr>
                                                                    <td
                                                                        align="center"
                                                                        height="40"
                                                                        style="
                                                                            padding: 0;
                                                                            margin: 0;
                                                                        "></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                        <table
                            class="es-content"
                            cellspacing="0"
                            cellpadding="0"
                            align="center"
                            style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                border-collapse: collapse;
                                border-spacing: 0px;
                                width: 100%;
                                table-layout: fixed !important;
                            ">
                            <tr>
                                <td align="center" style="padding: 0; margin: 0">
                                    <table
                                        class="es-content-body"
                                        style="
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                            border-collapse: collapse;
                                            border-spacing: 0px;
                                            background-color: transparent;
                                            width: 510px;
                                        "
                                        cellspacing="0"
                                        cellpadding="0"
                                        align="center"
                                        bgcolor="#FAD939">
                                        <tr>
                                            <td align="left" style="padding: 0; margin: 0">
                                                <table
                                                    width="100%"
                                                    cellspacing="0"
                                                    cellpadding="0"
                                                    style="
                                                        mso-table-lspace: 0pt;
                                                        mso-table-rspace: 0pt;
                                                        border-collapse: collapse;
                                                        border-spacing: 0px;
                                                    ">
                                                    <tr>
                                                        <td
                                                            class="es-m-p0r"
                                                            valign="top"
                                                            align="center"
                                                            style="
                                                                padding: 0;
                                                                margin: 0;
                                                                width: 510px;
                                                            ">
                                                            <table
                                                                width="100%"
                                                                cellspacing="0"
                                                                cellpadding="0"
                                                                role="presentation"
                                                                style="
                                                                    mso-table-lspace: 0pt;
                                                                    mso-table-rspace: 0pt;
                                                                    border-collapse: collapse;
                                                                    border-spacing: 0px;
                                                                ">
                                                                <tr>
                                                                    <td
                                                                        align="center"
                                                                        style="
                                                                            padding: 0;
                                                                            margin: 0;
                                                                            position: relative;
                                                                        ">
                                                                        <img
                                                                            class="adapt-img"
                                                                            src="https://sgsxxc.stripocdn.email/content/guids/bannerImgGuid/images/image16754305136317786.png"
                                                                            alt=""
                                                                            title=""
                                                                            width="510"
                                                                            style="
                                                                                display: block;
                                                                                font-size: 18px;
                                                                                border: 0;
                                                                                outline: none;
                                                                                text-decoration: none;
                                                                            "
                                                                            height="324" />
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                        <table
                            cellpadding="0"
                            cellspacing="0"
                            class="es-content"
                            align="center"
                            style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                border-collapse: collapse;
                                border-spacing: 0px;
                                width: 100%;
                                table-layout: fixed !important;
                            ">
                            <tr>
                                <td align="center" style="padding: 0; margin: 0">
                                    <table
                                        bgcolor="#ffffff"
                                        class="es-content-body"
                                        align="center"
                                        cellpadding="0"
                                        cellspacing="0"
                                        style="
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                            border-collapse: collapse;
                                            border-spacing: 0px;
                                            background-color: #fad939;
                                            border-radius: 0 0 50px 50px;
                                            width: 510px;
                                        ">
                                        <tr>
                                            <td
                                                align="left"
                                                style="
                                                    padding: 0;
                                                    margin: 0;
                                                    padding-right: 20px;
                                                    padding-left: 20px;
                                                ">
                                                <table
                                                    cellpadding="0"
                                                    cellspacing="0"
                                                    width="100%"
                                                    style="
                                                        mso-table-lspace: 0pt;
                                                        mso-table-rspace: 0pt;
                                                        border-collapse: collapse;
                                                        border-spacing: 0px;
                                                    ">
                                                    <tr>
                                                        <td
                                                            align="center"
                                                            valign="top"
                                                            style="
                                                                padding: 0;
                                                                margin: 0;
                                                                width: 470px;
                                                            ">
                                                            <table
                                                                cellpadding="0"
                                                                cellspacing="0"
                                                                width="100%"
                                                                role="presentation"
                                                                style="
                                                                    mso-table-lspace: 0pt;
                                                                    mso-table-rspace: 0pt;
                                                                    border-collapse: collapse;
                                                                    border-spacing: 0px;
                                                                ">
                                                                <tr>
                                                                    <td
                                                                        align="center"
                                                                        style="
                                                                            padding: 0;
                                                                            margin: 0;
                                                                        ">
                                                                        <h1
                                                                            style="
                                                                                margin: 0;
                                                                                font-family: Poppins,
                                                                                    sans-serif;
                                                                                mso-line-height-rule: exactly;
                                                                                letter-spacing: 0;
                                                                                font-size: 38px;
                                                                                font-style: normal;
                                                                                font-weight: bold;
                                                                                line-height: 46px;
                                                                                color: #5d541d;
                                                                            ">
                                                                            Please confirm<br />your
                                                                            email address
                                                                        </h1>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td
                                                                        align="center"
                                                                        style="
                                                                            padding: 0;
                                                                            margin: 0;
                                                                            padding-top: 40px;
                                                                            padding-bottom: 40px;
                                                                        ">
                                                                        <h3
                                                                            style="
                                                                                margin: 0;
                                                                                font-family: Poppins,
                                                                                    sans-serif;
                                                                                mso-line-height-rule: exactly;
                                                                                letter-spacing: 0;
                                                                                font-size: 20px;
                                                                                font-style: normal;
                                                                                font-weight: bold;
                                                                                line-height: 24px;
                                                                                color: #5d541d;
                                                                            ">
                                                                            Thanks for joining
                                                                            devripon.io
                                                                        </h3>
                                                                        <p
                                                                            style="
                                                                                margin: 0;
                                                                                mso-line-height-rule: exactly;
                                                                                font-family: Poppins,
                                                                                    sans-serif;
                                                                                line-height: 27px;
                                                                                letter-spacing: 0;
                                                                                color: #5d541d;
                                                                                font-size: 18px;
                                                                            ">
                                                                            <br />
                                                                        </p>
                                                                        <p
                                                                            style="
                                                                                margin: 0;
                                                                                mso-line-height-rule: exactly;
                                                                                font-family: Poppins,
                                                                                    sans-serif;
                                                                                line-height: 27px;
                                                                                letter-spacing: 0;
                                                                                color: #5d541d;
                                                                                font-size: 18px;
                                                                            ">
                                                                            To finish signing up,
                                                                            please confirm your
                                                                            email address. This
                                                                            ensures we have the
                                                                            right email in case we
                                                                            need to contact you.
                                                                        </p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td
                                                                        align="center"
                                                                        style="
                                                                            padding: 0;
                                                                            margin: 0;
                                                                        ">
                                                                        <!--[if mso
                                                                            ]><a
                                                                                href="https://viewstripo.email"
                                                                                target="_blank"
                                                                                hidden>
                                                                                <v:roundrect
                                                                                    xmlns:v="urn:schemas-microsoft-com:vml"
                                                                                    xmlns:w="urn:schemas-microsoft-com:office:word"
                                                                                    esdevVmlButton
                                                                                    href="https://viewstripo.email"
                                                                                    style="
                                                                                        height: 49px;
                                                                                        v-text-anchor: middle;
                                                                                        width: 254px;
                                                                                    "
                                                                                    arcsize="50%"
                                                                                    stroke="f"
                                                                                    fillcolor="#8928c6">
                                                                                    <w:anchorlock></w:anchorlock>
                                                                                    <center
                                                                                        style="
                                                                                            color: #ffffff;
                                                                                            font-family: Poppins,
                                                                                                sans-serif;
                                                                                            font-size: 16px;
                                                                                            font-weight: 400;
                                                                                            line-height: 16px;
                                                                                            mso-text-raise: 1px;
                                                                                        ">
                                                                                        Confirm
                                                                                        email
                                                                                        address
                                                                                    </center>
                                                                                </v:roundrect></a
                                                                            > <!
                                                                        [endif]--><!--[if !mso]><!-- --><span
                                                                            class="es-button-border msohide"
                                                                            style="
                                                                                border-style: solid;
                                                                                border-color: #2cb543;
                                                                                background: #8928c6;
                                                                                border-width: 0px;
                                                                                display: inline-block;
                                                                                border-radius: 30px;
                                                                                width: auto;
                                                                                mso-hide: all;
                                                                            "
                                                                            ><a
                                                                                href="https://viewstripo.email"
                                                                                class="es-button"
                                                                                target="_blank"
                                                                                style="
                                                                                    mso-style-priority: 100 !important;
                                                                                    text-decoration: none !important;
                                                                                    mso-line-height-rule: exactly;
                                                                                    color: #ffffff;
                                                                                    font-size: 16px;
                                                                                    padding: 15px
                                                                                        35px 15px
                                                                                        35px;
                                                                                    display: inline-block;
                                                                                    background: #8928c6;
                                                                                    border-radius: 30px;
                                                                                    font-family: Poppins,
                                                                                        sans-serif;
                                                                                    font-weight: normal;
                                                                                    font-style: normal;
                                                                                    line-height: 19px !important;
                                                                                    width: auto;
                                                                                    text-align: center;
                                                                                    letter-spacing: 0;
                                                                                    mso-padding-alt: 0;
                                                                                    mso-border-alt: 10px
                                                                                        solid
                                                                                        #660099;
                                                                                    border-color: #8928c6;
                                                                                "
                                                                                >Confirm email
                                                                                address</a
                                                                            ></span
                                                                        ><!--<![endif]-->
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                align="left"
                                                style="
                                                    margin: 0;
                                                    padding-right: 20px;
                                                    padding-left: 20px;
                                                    padding-bottom: 40px;
                                                    padding-top: 20px;
                                                ">
                                                <table
                                                    cellpadding="0"
                                                    cellspacing="0"
                                                    width="100%"
                                                    style="
                                                        mso-table-lspace: 0pt;
                                                        mso-table-rspace: 0pt;
                                                        border-collapse: collapse;
                                                        border-spacing: 0px;
                                                    ">
                                                    <tr>
                                                        <td
                                                            align="left"
                                                            style="
                                                                padding: 0;
                                                                margin: 0;
                                                                width: 470px;
                                                            ">
                                                            <table
                                                                cellpadding="0"
                                                                cellspacing="0"
                                                                width="100%"
                                                                role="presentation"
                                                                style="
                                                                    mso-table-lspace: 0pt;
                                                                    mso-table-rspace: 0pt;
                                                                    border-collapse: collapse;
                                                                    border-spacing: 0px;
                                                                ">
                                                                <tr>
                                                                    <td
                                                                        align="center"
                                                                        style="
                                                                            padding: 0;
                                                                            margin: 0;
                                                                        ">
                                                                        <p
                                                                            style="
                                                                                margin: 0;
                                                                                mso-line-height-rule: exactly;
                                                                                font-family: Poppins,
                                                                                    sans-serif;
                                                                                line-height: 21px;
                                                                                letter-spacing: 0;
                                                                                color: #5d541d;
                                                                                font-size: 14px;
                                                                            ">
                                                                            Thanks,<br />Brandindoor
                                                                            Team!&nbsp;
                                                                        </p>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                        <table
                            cellpadding="0"
                            cellspacing="0"
                            class="es-header"
                            align="center"
                            style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                border-collapse: collapse;
                                border-spacing: 0px;
                                width: 100%;
                                table-layout: fixed !important;
                                background-color: transparent;
                                background-repeat: repeat;
                                background-position: center top;
                            ">
                            <tr>
                                <td align="center" style="padding: 0; margin: 0">
                                    <table
                                        bgcolor="#fad939"
                                        class="es-header-body"
                                        align="center"
                                        cellpadding="0"
                                        cellspacing="0"
                                        style="
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                            border-collapse: collapse;
                                            border-spacing: 0px;
                                            background-color: #ffffff;
                                            width: 510px;
                                        ">
                                        <tr>
                                            <td
                                                align="left"
                                                style="
                                                    padding: 0;
                                                    margin: 0;
                                                    padding-right: 20px;
                                                    padding-left: 20px;
                                                ">
                                                <table
                                                    cellpadding="0"
                                                    cellspacing="0"
                                                    width="100%"
                                                    style="
                                                        mso-table-lspace: 0pt;
                                                        mso-table-rspace: 0pt;
                                                        border-collapse: collapse;
                                                        border-spacing: 0px;
                                                    ">
                                                    <tr>
                                                        <td
                                                            align="center"
                                                            valign="top"
                                                            style="
                                                                padding: 0;
                                                                margin: 0;
                                                                width: 470px;
                                                            ">
                                                            <table
                                                                cellpadding="0"
                                                                cellspacing="0"
                                                                width="100%"
                                                                role="presentation"
                                                                style="
                                                                    mso-table-lspace: 0pt;
                                                                    mso-table-rspace: 0pt;
                                                                    border-collapse: collapse;
                                                                    border-spacing: 0px;
                                                                ">
                                                                <tr>
                                                                    <td
                                                                        align="center"
                                                                        height="40"
                                                                        style="
                                                                            padding: 0;
                                                                            margin: 0;
                                                                        "></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                        <table
                            cellpadding="0"
                            cellspacing="0"
                            class="es-footer"
                            align="center"
                            style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                border-collapse: collapse;
                                border-spacing: 0px;
                                width: 100%;
                                table-layout: fixed !important;
                                background-color: transparent;
                                background-repeat: repeat;
                                background-position: center top;
                            ">
                            <tr>
                                <td align="center" style="padding: 0; margin: 0">
                                    <table
                                        bgcolor="#ffffff"
                                        class="es-footer-body"
                                        align="center"
                                        cellpadding="0"
                                        cellspacing="0"
                                        style="
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                            border-collapse: collapse;
                                            border-spacing: 0px;
                                            background-color: #333333;
                                            border-radius: 50px;
                                            width: 510px;
                                        ">
                                        <tr>
                                            <td
                                                align="left"
                                                style="
                                                    margin: 0;
                                                    padding-right: 20px;
                                                    padding-left: 20px;
                                                    padding-top: 20px;
                                                    padding-bottom: 20px;
                                                ">
                                                <!--[if mso]><table style="width:470px" cellpadding="0"
cellspacing="0"><tr><td style="width:225px" valign="top"><![endif]-->
                                                <table
                                                    cellpadding="0"
                                                    cellspacing="0"
                                                    class="es-left"
                                                    align="left"
                                                    style="
                                                        mso-table-lspace: 0pt;
                                                        mso-table-rspace: 0pt;
                                                        border-collapse: collapse;
                                                        border-spacing: 0px;
                                                        float: left;
                                                    ">
                                                    <tr>
                                                        <td
                                                            class="es-m-p20b"
                                                            align="left"
                                                            style="
                                                                padding: 0;
                                                                margin: 0;
                                                                width: 225px;
                                                            ">
                                                            <table
                                                                cellpadding="0"
                                                                cellspacing="0"
                                                                width="100%"
                                                                role="presentation"
                                                                style="
                                                                    mso-table-lspace: 0pt;
                                                                    mso-table-rspace: 0pt;
                                                                    border-collapse: collapse;
                                                                    border-spacing: 0px;
                                                                ">
                                                                <tr>
                                                                    <td
                                                                        align="left"
                                                                        class="es-m-txt-c"
                                                                        style="
                                                                            padding: 0;
                                                                            margin: 0;
                                                                            font-size: 0px;
                                                                        ">
                                                                        <a
                                                                            target="_blank"
                                                                            href="https://viewstripo.email"
                                                                            style="
                                                                                mso-line-height-rule: exactly;
                                                                                text-decoration: underline;
                                                                                color: #ffffff;
                                                                                font-size: 14px;
                                                                            "
                                                                            ><img
                                                                                src="https://sgsxxc.stripocdn.email/content/guids/CABINET_1bfc4ac6dddc4ae38edeae5cbef32bf9ff4e576d845736df126fd766dd798e9a/images/group_4076195_Ni6.png"
                                                                                alt="Logo"
                                                                                style="
                                                                                    display: block;
                                                                                    font-size: 18px;
                                                                                    border: 0;
                                                                                    outline: none;
                                                                                    text-decoration: none;
                                                                                "
                                                                                height="30"
                                                                                title="Logo"
                                                                        /></a>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <!--[if mso]></td><td style="width:20px"></td><td style="width:225px" valign="top"><![endif]-->
                                                <table
                                                    cellpadding="0"
                                                    cellspacing="0"
                                                    class="es-right"
                                                    align="right"
                                                    style="
                                                        mso-table-lspace: 0pt;
                                                        mso-table-rspace: 0pt;
                                                        border-collapse: collapse;
                                                        border-spacing: 0px;
                                                        float: right;
                                                    ">
                                                    <tr>
                                                        <td
                                                            align="left"
                                                            style="
                                                                padding: 0;
                                                                margin: 0;
                                                                width: 225px;
                                                            ">
                                                            <table
                                                                cellpadding="0"
                                                                cellspacing="0"
                                                                width="100%"
                                                                role="presentation"
                                                                style="
                                                                    mso-table-lspace: 0pt;
                                                                    mso-table-rspace: 0pt;
                                                                    border-collapse: collapse;
                                                                    border-spacing: 0px;
                                                                ">
                                                                <tr>
                                                                    <td
                                                                        align="right"
                                                                        class="es-m-txt-c"
                                                                        style="
                                                                            padding: 0;
                                                                            margin: 0;
                                                                            padding-top: 5px;
                                                                            font-size: 0;
                                                                        ">
                                                                        <table
                                                                            cellpadding="0"
                                                                            cellspacing="0"
                                                                            class="es-table-not-adapt es-social"
                                                                            role="presentation"
                                                                            style="
                                                                                mso-table-lspace: 0pt;
                                                                                mso-table-rspace: 0pt;
                                                                                border-collapse: collapse;
                                                                                border-spacing: 0px;
                                                                            ">
                                                                            <tr>
                                                                                <td
                                                                                    align="center"
                                                                                    valign="top"
                                                                                    style="
                                                                                        padding: 0;
                                                                                        margin: 0;
                                                                                        padding-right: 10px;
                                                                                    ">
                                                                                    <a
                                                                                        target="_blank"
                                                                                        href="https://viewstripo.email"
                                                                                        style="
                                                                                            mso-line-height-rule: exactly;
                                                                                            text-decoration: underline;
                                                                                            color: #ffffff;
                                                                                            font-size: 14px;
                                                                                        "
                                                                                        ><img
                                                                                            src="https://sgsxxc.stripocdn.email/content/assets/img/social-icons/circle-white/facebook-circle-white.png"
                                                                                            alt="Fb"
                                                                                            title="Facebook"
                                                                                            height="24"
                                                                                            style="
                                                                                                display: block;
                                                                                                font-size: 18px;
                                                                                                border: 0;
                                                                                                outline: none;
                                                                                                text-decoration: none;
                                                                                            "
                                                                                    /></a>
                                                                                </td>
                                                                                <td
                                                                                    align="center"
                                                                                    valign="top"
                                                                                    style="
                                                                                        padding: 0;
                                                                                        margin: 0;
                                                                                        padding-right: 10px;
                                                                                    ">
                                                                                    <a
                                                                                        target="_blank"
                                                                                        href="https://viewstripo.email"
                                                                                        style="
                                                                                            mso-line-height-rule: exactly;
                                                                                            text-decoration: underline;
                                                                                            color: #ffffff;
                                                                                            font-size: 14px;
                                                                                        "
                                                                                        ><img
                                                                                            src="https://sgsxxc.stripocdn.email/content/assets/img/social-icons/circle-white/x-circle-white.png"
                                                                                            alt="X"
                                                                                            title="X.com"
                                                                                            height="24"
                                                                                            style="
                                                                                                display: block;
                                                                                                font-size: 18px;
                                                                                                border: 0;
                                                                                                outline: none;
                                                                                                text-decoration: none;
                                                                                            "
                                                                                    /></a>
                                                                                </td>
                                                                                <td
                                                                                    align="center"
                                                                                    valign="top"
                                                                                    style="
                                                                                        padding: 0;
                                                                                        margin: 0;
                                                                                        padding-right: 10px;
                                                                                    ">
                                                                                    <a
                                                                                        target="_blank"
                                                                                        href="https://viewstripo.email"
                                                                                        style="
                                                                                            mso-line-height-rule: exactly;
                                                                                            text-decoration: underline;
                                                                                            color: #ffffff;
                                                                                            font-size: 14px;
                                                                                        "
                                                                                        ><img
                                                                                            src="https://sgsxxc.stripocdn.email/content/assets/img/social-icons/circle-white/instagram-circle-white.png"
                                                                                            alt="Ig"
                                                                                            title="Instagram"
                                                                                            height="24"
                                                                                            style="
                                                                                                display: block;
                                                                                                font-size: 18px;
                                                                                                border: 0;
                                                                                                outline: none;
                                                                                                text-decoration: none;
                                                                                            "
                                                                                    /></a>
                                                                                </td>
                                                                                <td
                                                                                    align="center"
                                                                                    valign="top"
                                                                                    style="
                                                                                        padding: 0;
                                                                                        margin: 0;
                                                                                    ">
                                                                                    <a
                                                                                        target="_blank"
                                                                                        href="https://viewstripo.email"
                                                                                        style="
                                                                                            mso-line-height-rule: exactly;
                                                                                            text-decoration: underline;
                                                                                            color: #ffffff;
                                                                                            font-size: 14px;
                                                                                        "
                                                                                        ><img
                                                                                            src="https://sgsxxc.stripocdn.email/content/assets/img/social-icons/circle-white/youtube-circle-white.png"
                                                                                            alt="Yt"
                                                                                            title="Youtube"
                                                                                            height="24"
                                                                                            style="
                                                                                                display: block;
                                                                                                font-size: 18px;
                                                                                                border: 0;
                                                                                                outline: none;
                                                                                                text-decoration: none;
                                                                                            "
                                                                                    /></a>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <!--[if mso]></td></tr></table><![endif]-->
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                        <table
                            cellpadding="0"
                            cellspacing="0"
                            class="es-content"
                            align="center"
                            style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                border-collapse: collapse;
                                border-spacing: 0px;
                                width: 100%;
                                table-layout: fixed !important;
                            ">
                            <tr>
                                <td
                                    class="es-info-area"
                                    align="center"
                                    style="padding: 0; margin: 0">
                                    <table
                                        class="es-content-body"
                                        align="center"
                                        cellpadding="0"
                                        cellspacing="0"
                                        style="
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                            border-collapse: collapse;
                                            border-spacing: 0px;
                                            background-color: transparent;
                                            border-radius: 50px;
                                            width: 510px;
                                        ">
                                        <tr>
                                            <td
                                                align="left"
                                                style="
                                                    padding: 0;
                                                    margin: 0;
                                                    padding-right: 20px;
                                                    padding-left: 20px;
                                                    padding-top: 20px;
                                                ">
                                                <table
                                                    cellpadding="0"
                                                    cellspacing="0"
                                                    width="100%"
                                                    style="
                                                        mso-table-lspace: 0pt;
                                                        mso-table-rspace: 0pt;
                                                        border-collapse: collapse;
                                                        border-spacing: 0px;
                                                    ">
                                                    <tr>
                                                        <td
                                                            align="center"
                                                            valign="top"
                                                            style="
                                                                padding: 0;
                                                                margin: 0;
                                                                width: 470px;
                                                            ">
                                                            <table
                                                                cellpadding="0"
                                                                cellspacing="0"
                                                                width="100%"
                                                                role="presentation"
                                                                style="
                                                                    mso-table-lspace: 0pt;
                                                                    mso-table-rspace: 0pt;
                                                                    border-collapse: collapse;
                                                                    border-spacing: 0px;
                                                                ">
                                                                <tr>
                                                                    <td
                                                                        align="center"
                                                                        class="es-infoblock"
                                                                        style="
                                                                            padding: 0;
                                                                            margin: 0;
                                                                        ">
                                                                        <p
                                                                            style="
                                                                                margin: 0;
                                                                                mso-line-height-rule: exactly;
                                                                                font-family: Poppins,
                                                                                    sans-serif;
                                                                                line-height: 18px;
                                                                                letter-spacing: 0;
                                                                                color: #cccccc;
                                                                                font-size: 12px;
                                                                            ">
                                                                            Unsubscribe
                                                                        </p>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                        <table
                            cellpadding="0"
                            cellspacing="0"
                            class="es-header"
                            align="center"
                            style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                border-collapse: collapse;
                                border-spacing: 0px;
                                width: 100%;
                                table-layout: fixed !important;
                                background-color: transparent;
                                background-repeat: repeat;
                                background-position: center top;
                            ">
                            <tr>
                                <td align="center" style="padding: 0; margin: 0">
                                    <table
                                        bgcolor="#fad939"
                                        class="es-header-body"
                                        align="center"
                                        cellpadding="0"
                                        cellspacing="0"
                                        style="
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                            border-collapse: collapse;
                                            border-spacing: 0px;
                                            background-color: #ffffff;
                                            width: 510px;
                                        ">
                                        <tr>
                                            <td
                                                align="left"
                                                style="
                                                    padding: 0;
                                                    margin: 0;
                                                    padding-right: 20px;
                                                    padding-left: 20px;
                                                ">
                                                <table
                                                    cellpadding="0"
                                                    cellspacing="0"
                                                    width="100%"
                                                    style="
                                                        mso-table-lspace: 0pt;
                                                        mso-table-rspace: 0pt;
                                                        border-collapse: collapse;
                                                        border-spacing: 0px;
                                                    ">
                                                    <tr>
                                                        <td
                                                            align="center"
                                                            valign="top"
                                                            style="
                                                                padding: 0;
                                                                margin: 0;
                                                                width: 470px;
                                                            ">
                                                            <table
                                                                cellpadding="0"
                                                                cellspacing="0"
                                                                width="100%"
                                                                role="presentation"
                                                                style="
                                                                    mso-table-lspace: 0pt;
                                                                    mso-table-rspace: 0pt;
                                                                    border-collapse: collapse;
                                                                    border-spacing: 0px;
                                                                ">
                                                                <tr>
                                                                    <td
                                                                        align="center"
                                                                        height="40"
                                                                        style="
                                                                            padding: 0;
                                                                            margin: 0;
                                                                        "></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                        <table
                            cellpadding="0"
                            cellspacing="0"
                            class="es-content"
                            align="center"
                            style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                border-collapse: collapse;
                                border-spacing: 0px;
                                width: 100%;
                                table-layout: fixed !important;
                            ">
                            <tr>
                                <td align="center" style="padding: 0; margin: 0">
                                    <table
                                        class="es-content-body"
                                        align="center"
                                        cellpadding="0"
                                        cellspacing="0"
                                        style="
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                            border-collapse: collapse;
                                            border-spacing: 0px;
                                            background-color: transparent;
                                            width: 510px;
                                        ">
                                        <tr>
                                            <td align="left" style="padding: 20px; margin: 0">
                                                <table
                                                    cellpadding="0"
                                                    cellspacing="0"
                                                    width="100%"
                                                    style="
                                                        mso-table-lspace: 0pt;
                                                        mso-table-rspace: 0pt;
                                                        border-collapse: collapse;
                                                        border-spacing: 0px;
                                                    ">
                                                    <tr>
                                                        <td
                                                            align="center"
                                                            valign="top"
                                                            style="
                                                                padding: 0;
                                                                margin: 0;
                                                                width: 470px;
                                                            ">
                                                            <table
                                                                cellpadding="0"
                                                                cellspacing="0"
                                                                width="100%"
                                                                role="presentation"
                                                                style="
                                                                    mso-table-lspace: 0pt;
                                                                    mso-table-rspace: 0pt;
                                                                    border-collapse: collapse;
                                                                    border-spacing: 0px;
                                                                ">
                                                                <tr>
                                                                    <td
                                                                        align="center"
                                                                        class="es-infoblock made_with"
                                                                        style="
                                                                            padding: 0;
                                                                            margin: 0;
                                                                            font-size: 0;
                                                                        ">
                                                                        <a
                                                                            target="_blank"
                                                                            href="https://viewstripo.email/?utm_source=templates&utm_medium=email&utm_campaign=confirm_email_2&utm_content=finish_registration"
                                                                            style="
                                                                                mso-line-height-rule: exactly;
                                                                                text-decoration: underline;
                                                                                color: #cccccc;
                                                                                font-size: 12px;
                                                                            "
                                                                            ><img
                                                                                src="https://sgsxxc.stripocdn.email/content/guids/CABINET_09023af45624943febfa123c229a060b/images/7911561025989373.png"
                                                                                alt=""
                                                                                width="125"
                                                                                style="
                                                                                    display: block;
                                                                                    font-size: 18px;
                                                                                    border: 0;
                                                                                    outline: none;
                                                                                    text-decoration: none;
                                                                                "
                                                                        /></a>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
    </body>
</html>

        `,
    });
};
