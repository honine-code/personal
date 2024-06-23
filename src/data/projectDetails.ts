export const projectDetails = {
    "1": {
        title: "손비서 모바일앱 - ConfigManager 서비스",
        description: "손비서 모바일 애플리케이션은 AI비서가 전화를 대신 받아주고, 응대하며, 부재중 전화도 읽어주고, 통화녹음과 전화 내용 기록 기능을 제공합니다.",
        period: "2024.07.05 ~ (11개월 ~ 지속적인 고도화 및 신규기능 추가)",
        technologies: "Spring Boot, MariaDB, REST API, AWS, Git, Jenkins, Docker (Docker Compose), IntelliJ IDEA",
        roles: [
            "시스템 설계 및 개발: 회원 및 AI 설정 관리, 내선번호 발급, BusinessTime 관리, AI 운용 조회 기능, Spring Boot Actuator 사용",
            "Swagger 적용 및 API 문서화",
            "HTTP 로그 관리",
            "예외 처리 설정",
            "CI/CD 구축 및 관리",
            "컨테이너화 및 오케스트레이션"
        ],
        achievements: [
            "프로젝트 완료: 모든 프로젝트 기한 내 완료, 높은 신뢰성 확보",
            "섬세한 테스트: 통합 테스트 및 단위 테스트를 통해 빠르고 정확하게 문제 파악 및 해결, 담당자와의 원활한 커뮤니케이션 및 조치"
        ],
        improvements: [
            "자동화 도구 활용: 테스트 및 배포 과정의 자동화를 더욱 강화하여 개발 효율성 및 품질 향상",
            "성능 최적화: 시스템 성능을 최적화하기 위한 정기적인 코드 리뷰 및 리팩토링",
            "사용자 피드백 반영: 사용자 경험 개선을 위해 정기적인 피드백 수집 및 반영 절차 강화"
        ]
    },
    "2": {
        title: "외부 고객사 전산시스템 연동 (External-Communicator)",
        description: "외부 고객사의 전산에 데이터를 등록, 조회 및 수정하는 역할을 수행하며, AI 비서가 필요 정보를 취합하여 고객사의 전산에 등록하는 시스템입니다.",
        period: "2024.09.01 ~ 2024.12.31 (4개월)",
        technologies: "Spring Boot, MariaDB, RabbitMQ, REST API, WebSocket, AWS, Git, Jenkins, Docker (Docker Compose), IntelliJ IDEA",
        roles: [
            "시스템 설계 및 개발: AI 비서와의 연동, 데이터 처리, 데이터 조회 및 수정, 폼카드 수정 기능 개발, 비즈엠 알림톡 발송 연동",
            "실시간 통신: WebSocket 사용",
            "서버 설정 및 관리: RabbitMQ 관리",
            "고객 요구사항 분석 및 커스터마이징: 고객 요구사항 수집 및 분석, 맞춤형 기능 개발"
        ],
        achievements: [
            "상담 업무 자동화: AI 비서를 통해 자동화된 상담 처리 및 통계 분석으로 적절한 시나리오 적용, 업무 효율성 및 고객 만족도 증대",
            "매출액 증대: 자동화된 시스템을 통해 더 많은 콜을 처리하여 매출액 30% 증대"
        ],
        improvements: [
            "확장성 고려: 시스템의 미래 확장을 고려하여 모듈화 및 확장 가능한 아키텍처 설계",
            "효율적인 버전 관리: 고객사 요구사항을 반영한 기능 추가 및 수정 사항에 대해 효율적인 버전 관리 체계 구축",
            "통계 기반 시나리오 개선: 주, 월간 통계를 통해 AI 응대 시나리오를 지속적으로 개선하여 고객만족도 증대"
        ]
    }
};
