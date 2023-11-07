import DefaultLayout from "@/components-common/defaultLayout";
import Menu from "@/components-common/Menu";

export default function SpareLayout({children}) {
    return (
        <DefaultLayout>
            <DefaultLayout.Header>
            </DefaultLayout.Header>
            <DefaultLayout.Body>
                <Menu></Menu>
                {children}
            </DefaultLayout.Body>
        </DefaultLayout>
    )
}
