const HOST = "http://domevansbuchi.pythonanywhere.com"

export const api = {
    auth:{
        register:`${HOST}/api/users/register/`,
        login:`${HOST}/api/users/login/`,
    },
    user: {
        fetchDashboardData: `${HOST}/api/users/dashboard/`,
        fetchAllDoctors: `${HOST}/api/consult/doctors/`,
        fetchNotifications: `${HOST}/api/users/notifications/`,
        bookConsultation: `${HOST}/api/users/consultations/ `,
        fetchAllConsultations: `${HOST}/api/users/consultations/my/`,
        updateAccount: `${HOST}/api/users/account/update/`,
    }

}